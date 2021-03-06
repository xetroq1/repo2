/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ImageBackground, Image} from 'react-native';
import { Container, Content, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import LoginView from './src/components/LoginView';
import RegisterView from './src/components/RegisterView';
import Dashboard from './src/components/Dashboard';
import Profile from './src/components/Profile';
import History from './src/components/History';
import Payment from './src/components/Payment';
import Routes from './src/components/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import companyLogosm from './src/assets/images/main_logo-sm.png';
import { createDrawerNavigator, createAppContainer, DrawerItems, DrawerNavigation } from 'react-navigation';

var Spinner = require('react-native-spinkit');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const destroySession = async () => {
  await AsyncStorage.removeItem('userData');
  // Actions.dashboard();
  // PAGE REDIRECTION HERE
}
const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#1c1b22',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={{aspectRatio: 88 / 49}} source={companyLogosm} />
    </View>
    <DrawerItems {...props} activeTintColor='#1c1b22' activeBackgroundColor='#e3e3e3' inactiveTintColor='#1c1b22' inactiveBackgroundColor='transparent' />
  </View>
);

const MyDrawerNavigator = createDrawerNavigator({
      Dashboard:{
        screen: Dashboard,
      },
      Profile: {
        screen: Profile,
      },
      History: {
        screen: History,
      },
      Payment: {
        screen: Payment,
      },
      Logout: {
        screen: Routes,
        navigationOptions: ({navigation}) => {
            return {
                drawerLabel: () => null,
            }
        }
        // screen: () => {
        //   AsyncStorage.removeItem('userData');
        //   return <Routes />;
        //   },
        // navigationOptions: ({navigation}) => {
        //     return {
        //         drawerLabel: () => null,
        //     }
        // }
      }
    },
    {
      contentComponent: DrawerContent,
    }
);

const MyApp = createAppContainer(MyDrawerNavigator);

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        isLogged: false,
      }
  }

  componentDidMount() {
    this.checkSession();
  }

  if(isLoading){
    return (
        <View style={styles.container}>
          <Spinner type="9CubeGrid" color="#d3a04c" />
        </View>
      );
  }

  checkSession = async () => {
    if(await AsyncStorage.getItem('userData')){
      this.setState({
        isLogged: true,
        });
    }
    setTimeout(() => {
      this.setState({
        isLoading: false,
        });
      }, 1000);
  }

  destroySession = async () => {
    await AsyncStorage.removeItem('userData');
    this.setState({
      isLogged: false,
      });
  }

  createSession = async () => {
    await AsyncStorage.setItem('userData', true);

    this.setState({
      isLogged: true,
      });
  }

  render() {
    const { isLogged, isLoading } = this.state;

    if(isLoading){
      return (
        <View style={styles.container}>
          <Spinner type="9CubeGrid" color="#d3a04c" />
        </View>
        );
    }

    // if(isLogged === false){
      // return (
      //   <StyleProvider style={getTheme(material)}>
      //     <Routes />
      //   </StyleProvider>
      // );
    // }else{
    //
      return (
        <StyleProvider style={getTheme(material)}>
          <MyApp />
        </StyleProvider>
      );
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined
  }
});
