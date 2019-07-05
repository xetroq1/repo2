import React, {Component} from 'react';
import {
  // StyleSheet,
  // TextInput,
  Text
} from 'react-native';

export default class UserDashboard extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(){
    super();
  }
  render(){
    return(
      <Text>
        hello po this is user Dashboard
      </Text>
    );
  }
}
