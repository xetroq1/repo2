import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Profile extends Component {
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: () => (
            <Icon type="FontAwesome" name="user" style={{ fontSize: 22 }} />
        )
    };

    render() {
        return (
         <Container>
          <Header>
           <Left style={{ flexDirection: 'row' }}>
             <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: '#d3a04c', marginRight: 15 }} />
           </Left>
           <Right>
             <Button><Text>Log Out</Text></Button>
           </Right>
          </Header>
          <Content style={{ marginTop:100,marginLeft:100}}>
           <Button onPress={() => this.props.navigation.navigate('Dashboard')} >
            <Text>Go to Dashboard</Text>
           </Button>
          </Content>
          <Footer>
              <FooterTab style={{backgroundColor:"#1c1b22"}}>
                  <Button vertical>
                      <Icon name="apps" />
                      <Text>Apps</Text>
                  </Button>
                  <Button vertical>
                      <Icon name="camera" />
                      <Text>Camera</Text>
                  </Button>
                  <Button vertical active>
                      <Icon active name="navigate" />
                      <Text>Navigate</Text>
                  </Button>
                  <Button vertical>
                      <Icon name="person" />
                      <Text>Contact</Text>
                  </Button>
              </FooterTab>
          </Footer>
         </Container>
       );
    }
}
