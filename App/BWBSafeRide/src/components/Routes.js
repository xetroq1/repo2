import React, { Component } from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Icon } from 'native-base';
import { createDrawerNavigator,createAppContainer } from 'react-navigation';

import LoginView from './LoginView';
import RegisterView from './RegisterView';
import Profile from './Profile';
import Dashboard from './Dashboard';
import SideBarMenu from './SideBarMenu';

export default class Routes extends Component {

    render() {
        return (
          <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false}
                navigationBarStyle={{backgroundColor: '#1c1b22',}}
                titleStyle={{color: '#d3a04c',}}
            >
            <Scene>
                <Stack key="root">
                    {/* loader or Splash screen here*/}
                    <Scene hideNavBar={true} key="login" component={LoginView} title="Login"/>
                    <Scene hideNavBar={true} key="register" component={RegisterView} title="Register"/>
                    <Scene hideNavBar={true} key="dashboard" component={Dashboard} />
                </Stack>

           </Scene>
          </Router>
        );
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}
