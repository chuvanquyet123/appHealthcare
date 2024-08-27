import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Modal, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Notifications from 'expo-notifications';
import * as Audio from 'expo-av';
import AsyncStorage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowAlert: true,
        shouldSetBadge: false,
    }),
});

const ReminderPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [sound, setSound] = useState(null);
    const notificationListener = useRef();
    const [notification, setNotification] = useState(false);
    const [notificationId, setNotificationId] = useState(null);
    const alarmSound = require('../../assets/sounds/default.mp3');
    const [description, setDescription] = useState('');
    const [hour, setHour] = useState('10');
    const [minute, setMinute] = useState('38');
    const [repeat, setRepeat] = useState('Không');
    const [snooze, setSnooze] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();
    const { year, month, day } = route.params || {};

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(alarmSound);
        setSound(sound);
        await sound.playAsync();
    };

    const stopSound = async () => {
        if (sound) {
            await sound.stopAsync();
        }
    };

    const handleAcknowledge = () => {
        stopSound();
        setIsModalVisible(false);
    };

    useEffect(() => {
        notificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            setIsModalVisible(true);
            playSound();
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
        };
    }, []);

    useEffect(() => {
        if (route.params?.selectedDays) {
            const daysMap = {
                '1': 'T2',
                '2': 'T3',
                '3': 'T4',
                '4': 'T5',
                '5': 'T6',
                '6': 'T7',
                '7': 'CN',
            };
            const selectedDayLabels = route.params.selectedDays.map(dayId => daysMap[dayId]);
            if (selectedDayLabels.length === 7) {
                setRepeat('Hàng ngày');
            } else {
                setRepeat(selectedDayLabels.join(', '));
            }
        }
    }, [route.params?.selectedDays]);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleRepeat = () => {
        navigation.navigate("Repeat");
    };

    const storeData = async (id) => {
        try {
            if (id) {
                await AsyncStorage.setItem("currentAlarmId", JSON.stringify(id));
            } else {
                await AsyncStorage.removeItem("currentAlarmId");
            }
        } catch (e) {
            console.error('Lỗi khi lưu dữ liệu vào AsyncStorage:', e);
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("currentAlarmId");
            const id = jsonValue ? JSON.parse(jsonValue) : null;
            setNotificationId(id);
        } catch (e) {
            console.error('Lỗi khi lấy dữ liệu từ AsyncStorage:', e);
        }
    };

    const handleContinuePress = async () => {
        try {
            const { status } = await Notifications.getPermissionsAsync();
            if (status !== 'granted') {
                await Notifications.requestPermissionsAsync();
            }

            const alarmTime = new Date(year, month - 1, day, hour, minute);
            const response = await Notifications.scheduleNotificationAsync({
                content: {
                    title: description || "Nhắc nhở",
                    body: `Đến giờ uống thuốc ${hour}:${minute}`,
                    sound: alarmSound,
                    vibrationPattern: [0, 500, 1000],
                    priority: 'high'
                },
                trigger: {
                    date: alarmTime,
                    repeats: repeat === 'Hàng ngày',
                },
            });

            setNotificationId(response.identifier);
            await storeData(response.identifier);
            navigation.goBack();
        } catch (error) {
            console.error('Lỗi khi lên lịch thông báo:', error);
            alert('Có lỗi xảy ra khi lên lịch thông báo.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Thêm nhắc nhở</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Mô tả nhắc nhở</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập nhắc nhở"
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={hour}
                        onValueChange={(itemValue) => setHour(itemValue)}
                        style={styles.picker}
                    >
                        {Array.from({ length: 24 }, (_, i) => (
                            <Picker.Item key={i} label={i.toString().padStart(2, '0')} value={i.toString()} />
                        ))}
                    </Picker>
                    <Picker
                        selectedValue={minute}
                        onValueChange={(itemValue) => setMinute(itemValue)}
                        style={styles.picker}
                    >
                        {Array.from({ length: 60 }, (_, i) => (
                            <Picker.Item key={i} label={i.toString().padStart(2, '0')} value={i.toString()} />
                        ))}
                    </Picker>
                </View>
                <TouchableOpacity style={styles.settingOption} onPress={handleRepeat}>
                    <Text style={styles.optionLabel}>Lặp lại</Text>
                    <Text style={styles.optionValue}>{repeat}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingOption}>
                    <Text style={styles.optionLabel}>Âm thanh</Text>
                    <Text style={styles.optionValue}>Mặc định</Text>
                </TouchableOpacity>
                <View style={styles.settingOption}>
                    <Text style={styles.optionLabel}>Rung</Text>
                    <Switch
                        value={snooze}
                        onValueChange={(value) => setSnooze(value)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonCancel}>
                        <Text style={styles.buttonText}>Huỷ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleContinuePress} style={styles.buttonContinute}>
                        <Text style={styles.buttonText}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={handleAcknowledge}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Sắp đến giờ uống thuốc</Text>
                            <Image source={require('../../assets/img/icon.png')} style={styles.image} />
                            <TouchableOpacity onPress={handleAcknowledge} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Tôi hiểu rồi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#125B9A',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 18,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10
    },
    backButton: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 20,
        height: 150
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        backgroundColor: '#FFF',
        fontSize: 16,
        height: 120
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 50,
    },
    picker: {
        flex: 1,
        height: 150,
    },
    settingOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: '#303030',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    optionLabel: {
        color: '#000',
        fontSize: 18,
    },
    optionValue: {
        color: '#9E9E9E',
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        marginLeft: 5,
        fontWeight: '600',
    },
    buttonContinute: {
        backgroundColor: '#007BFF',
        width: 100,
        alignItems: 'center',
        marginLeft: 20,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonCancel: {
        backgroundColor: '#FF0033',
        width: 100,
        alignItems: 'center',
        marginRight: 20,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
    }
});

export default ReminderPage;
