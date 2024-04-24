import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import axios from 'axios';
import UserStore from '../stores/UserStore';
import { observer } from 'mobx-react-lite';

const LoginScreen = ({ navigation }) => {
  const [name, setUsername] = useState('');
  const [pwd, setPassword] = useState('');

  const handleLogin = async () => {
    // 在这里添加密码验证逻辑
    UserStore.requestLogin(name, pwd, (success: boolean) => {
      if (success) {
        ToastAndroid.show('登录成功', ToastAndroid.SHORT);
        navigation.replace('OperationScreen');
      } else {
        ToastAndroid.show('登录失败，' + UserStore.mgsInfo, ToastAndroid.SHORT);
      }
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="用户名"
        value={name}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="密码"
        value={pwd}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button title="登录" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="注册"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',//边框颜色
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20, // 间距
    width: '80%',
  },
});

export default LoginScreen;