import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Repeat = () => {
    const [selectedDays, setSelectedDays] = useState([]);

    const days = [
        { id: '1', label: 'Mỗi thứ 2' },
        { id: '2', label: 'Mỗi thứ 3' },
        { id: '3', label: 'Mỗi thứ 4' },
        { id: '4', label: 'Mỗi thứ 5' },
        { id: '5', label: 'Mỗi thứ 6' },
        { id: '6', label: 'Mỗi thứ 7' },
        { id: '7', label: 'Mỗi chủ nhật' },
    ];

    const toggleDaySelection = (id) => {
        setSelectedDays((prev) =>
            prev.includes(id) ? prev.filter((dayId) => dayId !== id) : [...prev, id]
        );
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => toggleDaySelection(item.id)}
        >
            <Text style={styles.itemText}>{item.label}</Text>
            {selectedDays.includes(item.id) && (
                <Icon name="checkmark" size={24} color="#007AFF" />
            )}
        </TouchableOpacity>
    );
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.navigate({
            name: 'Reminder',
            params: { selectedDays },
            merge: true,
        });
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
                <FlatList
                    data={days}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#3795BD',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding:10
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
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    itemText: {
        fontSize: 18,
        color: '#000000',
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
    },
});

export default Repeat;
