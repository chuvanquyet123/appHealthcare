import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch, Modal, Button, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ReminderPage = () => {
    const [description, setDescription] = useState('');
    const [hour, setHour] = useState('13');
    const [minute, setMinute] = useState('00');
    const [repeat, setRepeat] = useState('Không lặp lại');
    const [sound, setSound] = useState('Mặc định');
    const [vibrate, setVibrate] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const showTime = `${hour}:${minute}`;

    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.navigate("Lịch Uống Thuốc");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#007BFF" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Thêm nhắc nhở</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Mô tả nhắc nhở</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập nhắc nhở"
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Thời gian nhắc nhở</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.timePicker}>
                        <Text style={styles.timeText}>{showTime}</Text>
                    </TouchableOpacity>

                    <Modal
                        visible={modalVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setModalVisible(false)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Picker
                                    selectedValue={hour}
                                    onValueChange={(itemValue) => setHour(itemValue)}
                                    style={styles.picker}>
                                    {Array.from(Array(24).keys()).map((h) => (
                                        <Picker.Item key={h} label={h.toString().padStart(2, '0')} value={h.toString().padStart(2, '0')} />
                                    ))}
                                </Picker>

                                <Picker
                                    selectedValue={minute}
                                    onValueChange={(itemValue) => setMinute(itemValue)}
                                    style={styles.picker}>
                                    {Array.from(Array(60).keys()).map((m) => (
                                        <Picker.Item key={m} label={m.toString().padStart(2, '0')} value={m.toString().padStart(2, '0')} />
                                    ))}
                                </Picker>

                                <Button title="Xong" onPress={() => setModalVisible(false)} />
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.label}>Lặp lại</Text>
                    <Picker
                        selectedValue={repeat}
                        onValueChange={(itemValue) => setRepeat(itemValue)}
                        style={styles.picker}>
                        <Picker.Item label="Không lặp lại" value="Không lặp lại" />
                    </Picker>
                </View>

                <View style={styles.optionContainer}>
                    <Text style={styles.label}>Âm báo</Text>
                    <Picker
                        selectedValue={sound}
                        onValueChange={(itemValue) => setSound(itemValue)}
                        style={styles.picker}>
                        <Picker.Item label="Mặc định" value="Mặc định" />
                    </Picker>
                </View>

                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Rung</Text>
                    <Switch
                        value={vibrate}
                        onValueChange={setVibrate}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007BFF',
        flex: 1,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 20,
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
    },
    timePicker: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    timeText: {
        fontSize: 18,
        color: '#333',
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: 150,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
});

export default ReminderPage;
