import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { load } from '../utils/Storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';

const Welcome = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
    getUserInfo();
     // navigation.navigate('LoginScreen');
    }, 2000); // 2秒后导航到登录界面

    return () => clearTimeout(timer);
  }, []);
const getUserInfo = async()=>{
    const cacheUserInfo = await  load('userInfo');
    if (cacheUserInfo && JSON.parse(cacheUserInfo)){

        startHome();
    }else{
        startLogin();
    }
}
const startLogin = async()=>{

    navigation.navigate('LoginScreen');
}

const  startHome = async()=>{

    navigation.navigate('OperationScreen');
}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>欢迎使用围棋智能裁判</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E86C1',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Welcome;

