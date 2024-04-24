import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const OperationScreen = ({ navigation }) => {
  const handleMatchJudgment = () => {
    navigation.navigate('MatchJudgmentScreen');
  };

  const handleHistory = () => {
    navigation.navigate('HistoryScreen');
  };

  const handleProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
        <View style={styles.content}>
    <View style={styles.container}>
      <Button title="比赛判决" onPress={handleMatchJudgment} />
      <Button title="历史记录" onPress={handleHistory} />
      <Button title="个人中心" onPress={handleProfile} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
 content: {
    flex: 1,
    justifyContent: 'flex-end', // 将内容放置在底部
    alignItems: 'center',
    marginBottom: 20, // 调整内容与底部的间距
  },
  container: {
      position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
  },
});

export default OperationScreen;
