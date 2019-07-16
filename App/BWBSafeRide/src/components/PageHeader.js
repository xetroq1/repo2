import React, {Component} from 'react';
import { Header } from 'native-base';

export default class PageHeader extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(){
    super();
  }
  render(){
    return(
       <Header />
    );
  }

}
