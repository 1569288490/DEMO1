import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HistoryScreen = ({ navigation }) => {
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
    <View style={styles.container}>
      <Text>历史记录界面</Text>
      <View style={styles.content}>
        {/* 按钮放在底部居中分散 */}
        <View style={styles.buttonsContainer}>
          <Button title="比赛判决" onPress={handleMatchJudgment} />
          <Button title="历史记录" onPress={handleHistory} />
          <Button title="个人中心" onPress={handleProfile} />
        </View>
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
  content: {
    flex: 1,
    justifyContent: 'flex-end', // 将内容放置在底部
    alignItems: 'center',
    marginBottom: 20, // 调整内容与底部的间距
  },
  buttonsContainer: {
  position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default HistoryScreen;
