import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import LoginView from './LoginView';
import RegisterView from './RegisterView';
import BookComponent from './BookComponent';
import UserDashboard from './UserDashboard';

export default class Routes extends Component {
    render() {
        return (
            <Router
              barButtonIconStyle ={styles.barButtonIconStyle}
              hideNavBar={false}
              navigationBarStyle={{backgroundColor: '#1c1b22',}}
              titleStyle={{color: '#d3a04c',}}
            >
              <Stack key="root">
                <Scene key="login" component={LoginView} title="Login"/>
                <Scene key="register" component={RegisterView} title="Register"/>
                <Scene key="book" component={BookComponent} title="Book"/>
                <Scene key="user_dashboard" component={UserDashboard} title="Book"/>
              </Stack>
            </Router>
        );
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}
