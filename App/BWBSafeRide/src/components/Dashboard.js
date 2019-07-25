import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Dashboard extends Component {
    static navigationOptions = {
    drawerLabel: 'Dashboard',
    drawerIcon: () => (
        <Icon type="FontAwesome" name="home" style={{ fontSize: 22 }} />
    )

  };

    render() {
      console.log(this.props);
        return (
            <Container>
            <Header>
             <Left style={{ flexDirection: 'row' }}>
              <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: '#d3a04c', marginRight: 15 }} />
             </Left>
             <Right>
             </Right>
            </Header>
                <Content>
                    <Text>
                    Dashboard/Home Screen content goes here ...
                    </Text>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor:"#1c1b22"}}>
                        <Button vertical active>
                            <Icon active name="map" />
                            <Text>Book Now</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
        );
    }
}
