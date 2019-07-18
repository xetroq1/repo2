import React, { Component } from 'react';
import {Router, Stack, Scene, Drawer, Actions} from 'react-native-router-flux';

import LoginView from './LoginView';
import RegisterView from './RegisterView';
import Profile from './Profile';
import Dashboard from './Dashboard';
import SideBarMenu from './SideBarMenu';

export default class Routes extends Component {

    componentDidMount(){
        this.getData();
        Actions.drawerMenu()
    }

    async getData(responseJson) {
      try {
        let userData = await AsyncStorage.getItem("userData");
        let data = JSON.parse(userData);
        console.log(data);
        if(data.login_id !== null){
            Actions.profile();
        }
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }

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
                    <Scene key="login" component={LoginView} title="Login"/>
                    <Scene key="register" component={RegisterView} title="Register"/>
                    <Scene hideNavBar={true} key="profile" component={Profile} />
                </Stack>
                <Drawer
               hideNavBar
               key="drawerMenu"
               contentComponent={SideBarMenu}
               drawerWidth={250}
               drawerPosition="left"
           >
               <Scene
                   key="dashboard"
                   component={Dashboard}

               />

               <Scene
                   key="login"
                   component={LoginView}
               />

           </Drawer>
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
