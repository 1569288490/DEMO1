//// MatchJudgmentScreen.js
//import React from 'react';
//import { View, Text,Button, StyleSheet } from 'react-native';
//
//const MatchJudgmentScreen = ({ navigation }) => {
//                  const handleMatchJudgment = () => {
//                    navigation.navigate('MatchJudgmentScreen');
//                    };
//
//                  const handleHistory = () => {
//                  navigation.navigate('HistoryScreen');
//                  };
//
//                  const handleProfile = () => {
//                  navigation.navigate('ProfileScreen');
//                   };
//  return (
//    <View style={styles.container}>
//      <Text>比赛判决界面</Text>
//            <Button title="比赛判决" onPress={handleMatchJudgment} />
//            <Button title="历史记录" onPress={handleHistory} />
//            <Button title="个人中心" onPress={handleProfile} />
//    </View>
//
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});
//
//export default MatchJudgmentScreen;
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MatchJudgmentScreen  = ({ navigation }) => {
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
      <Text>比赛判决界面</Text>
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

export default MatchJudgmentScreen ;



//
//import React, { useState, useEffect } from 'react';
//import { View, Text, Button, StyleSheet, PermissionsAndroid } from 'react-native';
//import { RNCamera } from 'react-native-camera';
//
//const MatchJudgmentScreen = ({ navigation }) => {
//  const [hasCameraPermission, setHasCameraPermission] = useState(null);
//  const [showCameraView, setShowCameraView] = useState(false);
//
//  useEffect(() => {
//    requestCameraPermission();
//  }, []);
//
//  const requestCameraPermission = async () => {
//    try {
//      const granted = await PermissionsAndroid.request(
//        PermissionsAndroid.PERMISSIONS.CAMERA,
//        {
//          title: 'Camera Permission',
//          message: 'This app requires access to your camera.',
//          buttonNeutral: 'Ask Me Later',
//          buttonNegative: 'Cancel',
//          buttonPositive: 'OK',
//        }
//      );
//      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//        setHasCameraPermission(true);
//      } else {
//        setHasCameraPermission(false);
//      }
//    } catch (err) {
//      console.warn(err);
//    }
//  };
//
//  const openCamera = () => {
//    if (hasCameraPermission) {
//      setShowCameraView(true);
//    } else {
//      console.warn('No camera permission granted.');
//    }
//  };
//
//  const handleMatchJudgment = () => {
//    navigation.navigate('MatchJudgmentScreen');
//  };
//
//  const handleHistory = () => {
//    navigation.navigate('HistoryScreen');
//  };
//
//  const handleProfile = () => {
//    navigation.navigate('ProfileScreen');
//  };
//
//  return (
//    <View style={styles.container}>
//      <Text>比赛判决界面</Text>
//      <Button title="打开摄像头" onPress={openCamera} />
//      <View style={styles.content}>
//        {showCameraView ? (
//          <View style={styles.cameraContainer}>
//            <RNCamera
//              style={styles.camera}
//              type={RNCamera.Constants.Type.back}
//              captureAudio={false}
//            />
//          </View>
//        ) : (
//          <View style={styles.buttonsContainer}>
//
//            <Button title="比赛判决" onPress={handleMatchJudgment} />
//            <Button title="历史记录" onPress={handleHistory} />
//            <Button title="个人中心" onPress={handleProfile} />
//          </View>
//        )}
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  content: {
//    flex: 1,
//    justifyContent: 'flex-end', // 将内容放置在底部
//    alignItems: 'center',
//    marginBottom: 20, // 调整内容与底部的间距
//  },
//  buttonsContainer: {
//    flexDirection: 'row',
//    justifyContent: 'space-between', // 左右填充
//    width: '100%', // 宽度占满父容器
//    paddingHorizontal: 100, // 左右填充间距
//  },
//  cameraContainer: {
//    width: '100%',
//    height: '100%',
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  camera: {
//    width: 200,
//    height: 200,
//  },
//});
//
//export default MatchJudgmentScreen;
