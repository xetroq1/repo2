import React, {Component} from 'react';
import {
  // StyleSheet,
  // TextInput,
  Text
} from 'react-native';

export default class BookComponent extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(){
    super();
    // alert();
  }
  render(){
    return(
      <Text>
        hello po this is booking
      </Text>
    );
  }
}
