import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import ReminderComponent from '../../components/reminderComponent';
import HistoryComponent from '../../components/historyComponent';

export default function CalendarPage() {
  const [selectedTab, setSelectedTab] = useState('reminder');

  const renderContent = () => {
    if (selectedTab === 'reminder') {
      return <ReminderComponent />;
    } else if (selectedTab === 'history') {
      return <HistoryComponent />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.header}>Nhắc nhở uống thuốc</Text>
      <View style={{ flex: 1 }}>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'reminder' && styles.activeTab]}
            onPress={() => setSelectedTab('reminder')}
          >
            <Text style={styles.text}>Nhắc nhở</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'history' && styles.activeTab]}
            onPress={() => setSelectedTab('history')}
          >
            <Text style={styles.text}>Lịch sử uống thuốc</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {renderContent()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF',
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 20,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});
