import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoryComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Lịch sử uống thuốc</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
})