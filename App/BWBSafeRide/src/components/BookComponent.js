import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Form from './Form';
import StylesTemp from '../assets/css/StylesTemp';

import backgroundImg from '../assets/images/mobile-bg.jpg';

export default class BookComponent extends Component {
    // constructor(){
    //
    //   super();
    //   // alert();
    // }

    goBack() {
        Actions.pop()
    }

    render() {
        return(
            <ScrollView>
                <ImageBackground style={StylesTemp.container} source={backgroundImg}>
                    <Text>{'\n'}</Text>
                    <Text style={{color:'white'}}>{'Intro text goes here...'}</Text>
                    <View style={StylesTemp.containerBook}>

                        <View style={StylesTemp.inputWrap}>
                            <TextInput style={StylesTemp.inputBox2} placeholder="First Name" />
                            <TextInput style={StylesTemp.inputBox2} placeholder="Last Name" />
                        </View>
                        <TextInput style={StylesTemp.inputBox} placeholder="Phone Number" keyboardType="phone-pad" />
                        <TextInput style={StylesTemp.inputBox} placeholder="City" />
                        <TextInput style={StylesTemp.inputBox} placeholder="ZIP Code" keyboardType="number-pad" />

                        <TouchableOpacity style={StylesTemp.button}>
                            <Text style={StylesTemp.buttonText} onPress={() => this.onClickListener("REGISTER SUBMIT")}>Book</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={StylesTemp.signupTextCont}>
                        <Text style={StylesTemp.signupText}>Already have an account? </Text>
                        <TouchableOpacity onPress={this.goBack}><Text style={StylesTemp.signupButton}>Sign in</Text></TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}
