import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';

import {Actions} from 'react-native-router-flux';
import { SegmentedControls } from 'react-native-radio-buttons';
import ValidationComponent from 'react-native-form-validator';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

export default class Form extends ValidationComponent {

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            confirmpass: '',
            email: '',
            phone: '',
            city: '',
            zip: '',
            selectedOption: 'Driver'
        }
    }

    componentDidMount(){
        this.getData();
    }

    login() {
        Actions.login();
    }

    async getData(responseJson) {
      try {
        let userData = await AsyncStorage.getItem("userData");
        let data = JSON.parse(userData);
        console.log(data);
        if(data.login_id !== null){
            Actions.dashboard();
        }
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }

    onClickListener = (viewId) => {
        const { firstname }  = this.state;
        const { lastname }  = this.state;
        const { username }  = this.state;
        const { password }  = this.state;
        const { email }  = this.state;
        const { phone }  = this.state;
        const { city }  = this.state;
        const { zip }  = this.state;
        const { confirmpass }  = this.state;
        const { selectedOption } = this.state;

        // Call ValidationComponent validate method
          this.validate({
            firstname: {required: true},
            lastname: {required: true},
            username: {required: true},
            password: {minlength:6, required: true},
            email: {email: true, required: true},
            phone: {required: true},
            city: {required: true},
            zip: {numbers: true, required: true},
            selectedOption: {required: true}
          });

      if(viewId == "RegisterSubmit"){
          if(this.isFormValid()){
              fetch('http://web2.proweaverlinks.com/tech/bwbsafe/backend_web_api/api/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({

              username: username,
              password: password,
              firstname: firstname,
              lastname: lastname,
              email: email,
              phone: phone,
              city: city,
              zip: zip,
              confirmpass: confirmpass,
              user_type: selectedOption

            })

          }).then((response) => response.json())
            .then((responseJson) => {

             if(responseJson.response === 'success')
              {
                  Alert.alert('Successfully registered.');
                  this.login();

              }
              else{

                Alert.alert(JSON.stringify(responseJson.msg));
              }

            }).catch((error) => {
              console.error(error);
            });

        }else{
            Alert.alert(this.getErrorMessages());
        }
      }
    }

    saveData = async() => {
        const {username,password} = this.state;

        //save data with asyncstorage
        let loginDetails = {
            username: username,
            password: password
        }

        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            alert("You successfully registered. Username: " + username + ' password: ' + password);
            this.login();
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);

                if (ld.username != null && ld.password != null)
                {
                    if (ld.username == username && ld.password == password)
                    {
                        alert('Go in!');
                    }
                    else
                    {
                        alert('Username and Password does not exist!');
                    }
                }

            }catch(error)
            {
                alert(error);
            }
        }
    }

    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('username: '+ ld.username + ' ' + 'password: ' + ld.password);
    }

    render() {
        const options = [
            "Rider",
            "Driver"
        ];

        function setSelectedOption(selectedOption) {
            this.setState({
                selectedOption
            });
        }

        function renderOption(option, selected, onSelect, index){
            const style = selected ? { fontWeight: 'bold'} : {};

            return (
              <TouchableWithoutFeedback onPress={onSelect} key={index}>
                <Text style={style}>{option}</Text>
              </TouchableWithoutFeedback>
            );
          }

          function renderContainer(optionNodes){
            return <View>{optionNodes}</View>;
          }

        return(
            <View style={styles.container}>
                <View style={styles.radioBox}>
                    <SegmentedControls
                    tint={'#d3a04c'}
                    selectedTint= {'white'}
                    backTint= {'#1e2126'}
                    options={ options }
                    allowFontScaling={ false } // default: true
                    onSelection={ setSelectedOption.bind(this) }
                    selectedOption={this.state.selectedOption }
                    optionStyle={{fontFamily: 'AvenirNext-Medium'}}
                    optionContainerStyle={{flex: 1}}
                  />
                  <Text style={styles.textStyle}>You are a {this.state.selectedOption || 'none'}</Text>
              </View>

                <View style={styles.inputWrap}>
                    <TextInput style={styles.inputBox2} placeholder="First Name" onChangeText={(firstname) => this.setState({firstname})} />
                    <TextInput style={styles.inputBox2} placeholder="Last Name" onChangeText={(lastname) => this.setState({lastname})} />
                </View>
                <View style={styles.inputWrap}>
                    <TextInput style={styles.inputBox2} placeholder="Email" keyboardType="email-address" onChangeText={(email) => this.setState({email})} />
                    <TextInput style={styles.inputBox2} placeholder="Phone Number" keyboardType="phone-pad" onChangeText={(phone) => this.setState({phone})} />
                </View>
                <TextInput style={styles.inputBox} placeholder="City" onChangeText={(city) => this.setState({city})} />
                <TextInput style={styles.inputBox} placeholder="ZIP Code" keyboardType="number-pad" onChangeText={(zip) => this.setState({zip})} />
                <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                placeholder="Username"
                keyboardType="default"
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                ref={(input) => this.password = input}
                />

                <TextInput style={styles.inputBox} placeholder="Confirm Password" onChangeText={(confirmpass) => this.setState({confirmpass})} secureTextEntry={true} />
                <Text style={styles.textStyle2}>All fields are required.</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.onClickListener("RegisterSubmit")}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#d3a04c',
        textAlign: 'center',
        marginTop: 20,
    },
    textStyle2: {
        color: '#d60000',
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 30
    },
    inputWrap: {
        flexDirection: 'row'
    },
    radioBox: {
        width: 300,
        backgroundColor: 'transparent',
        fontSize: 14,
        color: '#002f6c',
        marginVertical: 10,
        paddingVertical: 8
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 2,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#002f6c',
        marginVertical: 10,
        paddingVertical: 8
    },
    inputBox2: {
        width: 145,
        backgroundColor: '#eeeeee',
        borderRadius: 2,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#002f6c',
        marginVertical: 10,
        marginLeft: 5,
        marginRight: 5,
        paddingVertical: 8
    },
    button: {
        width: 300,
        backgroundColor: '#d3a04c',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});
