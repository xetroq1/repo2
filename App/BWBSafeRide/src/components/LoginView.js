import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import usernameIcon from '../assets/images/icons8-username-filled-50.png';
import passwordIcon from '../assets/images/icons8-lock-filled-50.png';
import companyLogo from '../assets/images/main_logo.png';
import backgroundImg from '../assets/images/mobile-bg.jpg';

export default class LoginView extends Component {
static navigationOptions = {
  header:null
}
  constructor(props) {
    super(props);
    state = {
      username   : '',
      password: '',
    }
  }

  register() {
      Actions.register();
  }
  // book() {
  //     Actions.book();
  // }

  onClickListener = (viewId) => {
      const { username }  = this.state;
      const { password }  = this.state;
    Alert.alert("Alert", "Button pressed: "+viewId);

    if(viewId == "LoginSubmit"){
        fetch('http://web2.proweaverlinks.com/tech/bwbsafe/backend_web_api/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        username: username,
        password: password

      })

    }).then((response) => response.json())
      .then((responseJson) => {

       if(responseJson === 'Data Matched')
        {
            Alert.alert('Data matched');

        }
        else{

          Alert.alert(JSON.stringify(responseJson));
        }

      }).catch((error) => {
        console.error(error);
      });

    }
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={backgroundImg}>
        <Image style={styles.compLogo} source={companyLogo} accessibilityLabel="company logo" />
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={usernameIcon} />
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={passwordIcon}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('LoginSubmit')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.textStyles}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={()=> Actions.register()}>
            <Text style={styles.textStyles1}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight  onPress={()=>Actions.book()}>
            <Text style={styles.textStyles1}>Skip to Booking</Text>
        </TouchableHighlight>
        <TouchableHighlight  onPress={()=>Actions.page({asd:'aaaa'})}>
            <Text style={styles.textStyles1}>Page Dashboard</Text>
        </TouchableHighlight>
        <TouchableHighlight  onPress={()=>Actions.user_dashboard()}>
            <Text style={styles.textStyles1}>Skip to Dashboard</Text>
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    compLogo: {
        width: 162,
        height: 90,
        marginBottom: 50
    },
    textStyles: {
        color: '#fff'
    },
    textStyles1: {
        color: "#d3a04c"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#fff',
        borderRadius:30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width: 30,
        height: 30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: '#d3a04c'
    },
    loginText: {
        color: 'white',
    }
});
