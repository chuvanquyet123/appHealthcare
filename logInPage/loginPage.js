import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';


export default function LogIn() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../imageFolder/download-logo-tuean-mien-phi.jpg')}></Image>
        <Text style= {styles.font_text}>Đăng Nhập</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Nhập số điện thoại hoặc email'/>
        <TextInput style={styles.input} placeholder='Nhập mật khẩu'  
        secureTextEntry = {true}/>
        <Button title='Đăng Nhập'></Button>
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
