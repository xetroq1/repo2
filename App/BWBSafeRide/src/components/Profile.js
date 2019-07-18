import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Profile extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>
                    This is Content Section
                    </Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
        );
    }
}
