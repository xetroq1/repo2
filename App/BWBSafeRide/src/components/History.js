import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class History extends Component {
    static navigationOptions = {
        drawerLabel: 'History',
        drawerIcon: () => (
            <Icon type="FontAwesome" name="taxi" style={{ fontSize: 19 }} />
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
             </Right>
            </Header>
                <Content>
                    <Text>
                    History content goes here ...
                    </Text>
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
