import React, {Component} from 'react';
import {
  StyleSheet,
  // TextInput,
  View,
  Text,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import PayPal from 'react-native-paypal-wrapper';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';


export default class UserDashboard extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(){
    super();
    console.log('2222222222222222');
    // 3 env available: NO_NETWORK, SANDBOX, PRODUCTION
    // PayPal.initialize(PayPal.NO_NETWORK, "<your-client-id>");
    // PayPal.pay({
    //   price: '40.70',
    //   currency: 'MYR',
    //   description: 'Your description goes here',
    // }).then(confirm => console.log(confirm))
    //   .catch(error => console.log(error));
  }
  render(){
    return(
      <Container>
       <PageHeader />
         <Content>
          <Text>
            asdasd
          </Text>
           <MapView
             style={styles.map}
             initialRegion={{
               latitude: 37.78825,
               longitude: -122.4324,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}
           />
         </Content>
       <PageFooter />
     </Container>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});
