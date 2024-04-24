import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import { load } from '../utils/Storage';

const ProfileScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);
  const handleMatchJudgment = () => {
    navigation.navigate('MatchJudgmentScreen');
  };

  const handleHistory = () => {
    navigation.navigate('HistoryScreen');
  };

  const handleProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfoString = await load('userInfo');
      const userInfo = JSON.parse(userInfoString);
      setUserInfo(userInfo);
    };

    fetchUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
         <Text style={styles.label}>用户名：{userInfo.name}</Text>
         <Text style={styles.label}>密码：{userInfo.pwd}</Text>
         </>
         ) : (
         <Text style={styles.label}>载入中...</Text>
      )}
      <View style={styles.buttonsContainer}>
        <Button title="比赛判决" onPress={handleMatchJudgment} />
        <Button title="历史记录" onPress={handleHistory} />
        <Button title="个人中心" onPress={handleProfile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    label: {
      fontSize: 30,
      marginBottom: 10,
       color: '#000',
    },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default observer(ProfileScreen);
