import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';
import { useNavigation } from "@react-navigation/native";

export default function Alarm() {
  const [sound, setSound] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    let soundObject;

    const playSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/default.mp3'),
        { isLooping: true }
      );
      soundObject = sound;
      setSound(sound);
      await sound.playAsync();
    };

    playSound();

    // Clean up the sound when the component unmounts
    return () => {
      if (soundObject) {
        soundObject.stopAsync();
        soundObject.unloadAsync();
      }
    };
  }, []);

  const handleAcknowledge = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
    navigation.navigate('CalendarPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Sắp đến giờ uống thuốc</Text>
          <Image source={require('../assets/img/thuoc.png')} style={styles.image} />
          <TouchableOpacity onPress={handleAcknowledge} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Tôi hiểu rồi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
