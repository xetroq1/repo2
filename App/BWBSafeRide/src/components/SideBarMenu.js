import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Button, Body, Icon, Title } from 'native-base';
export default class SideBarMenu extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
