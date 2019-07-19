import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Profile extends Component {
    render() {
        return (
         <Container>
          <Header>
           <Left style={{ flexDirection: 'row' }}>
             <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: '#d3a04c', marginRight: 15 }} />
           </Left>
           <Right>
            
           </Right>
          </Header>
          <View style={{ marginTop:100,marginLeft:100}}>
           <Button onPress={() => this.props.navigation.navigate('Dashboard')} >
            <Text>Go to Dashboard</Text>
           </Button>
          </View>
         </Container>
       );
    }
}
