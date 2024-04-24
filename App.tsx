/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */




//
// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import LoginScreen from './src/components/LoginScreen.js';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
//
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;
//
// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
//
// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//        <View style = {styles.container}>
//         <LoginScreen/>
//         </View>
//     </SafeAreaView>
//   );
// }
//
// const styles = StyleSheet.create({
//         container:{
//                width:'100%',
//                 height:'100%',
//                flexDirection:'row',
//                justifyContent: 'center',
//                 alignItems: 'center',
//         }
//
// });
//
// export default App;


import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from './src/components/LoginScreen.js';
import Register from './src/components/Register.js';
import Welcome from './src/components/Welcome.js';
// import Register from './src/components/Register.js';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import OperationScreen from './src/components/OperationScreen.js';
import MatchJudgmentScreen from './src/components/MatchJudgmentScreen.js';
import HistoryScreen from './src/components/HistoryScreen.js';
import ProfileScreen from './src/components/ProfileScreen.js';
const Stack = createStackNavigator();
import {
 // SafeAreaProvider,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                 name="LoginScreen"
                component={LoginScreen}

            />
            <Stack.Screen
                name='Register'
                component={Register}
            />
            <Stack.Screen
            name="Welcome"
            component={Welcome} />
            <Stack.Screen name="OperationScreen" component={OperationScreen} />
            <Stack.Screen name="MatchJudgmentScreen" component={MatchJudgmentScreen} />
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>




  );
}



const styles = StyleSheet.create({
 container:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
 },
});

export default App;
App.js