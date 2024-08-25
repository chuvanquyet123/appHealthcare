import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    if (username === 'a' && password === 'b') {
      navigation.navigate('MainTabs');
    } else {
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/img/logo/download-logo-tuean-mien-phi.jpg')}></Image>
        <Text style= {styles.font_text}>Đăng Nhập</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput value={username} onChangeText={setUsername} style={styles.input} placeholder='Nhập số điện thoại hoặc email'/>
        <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder='Nhập mật khẩu'  
        secureTextEntry = {true}/>
        <Button onPress={handleLogin} title='Đăng Nhập'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
    
  },
  logo:{
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 20,
  

  },
  inputContainer:{
    width: '80%',
    justifyContent:'center'
  },

  input: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    fontSize: 16,
    borderColor: 'rgba(158, 150, 200, .3)',
    borderWidth: 2,
    opacity: 2,
    margin: 5
  },
  font_text:{
    fontSize: 20
  }
});
