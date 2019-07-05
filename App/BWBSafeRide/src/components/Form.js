import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';

import {Actions} from 'react-native-router-flux';
import { SegmentedControls } from 'react-native-radio-buttons';

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password: ''
        }
    }

    onClickListener = (viewId) => {
      Alert.alert("Alert", "Button pressed: "+viewId);
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
                  {/* }<Text style={styles.textStyle}>Selected option: {this.state.selectedOption || 'none'}</Text> */}
              </View>

                <View style={styles.inputWrap}>
                    <TextInput style={styles.inputBox2} placeholder="First Name" />
                    <TextInput style={styles.inputBox2} placeholder="Last Name" />
                </View>
                <TextInput style={styles.inputBox} placeholder="Phone Number" keyboardType="phone-pad" />
                <TextInput style={styles.inputBox} placeholder="City" />
                <TextInput style={styles.inputBox} placeholder="ZIP Code" keyboardType="number-pad" />
                <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Username"
                selectionColor="#fff"
                keyboardType="default"
                onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                ref={(input) => this.password = input}
                />

                <TextInput style={styles.inputBox} placeholder="Confirm Password" />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.onClickListener("REGISTER SUBMIT")}>{this.props.type}</Text>
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
        color: '#e3e3e3',
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
