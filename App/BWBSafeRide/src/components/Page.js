import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

export default class Page extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(){
    super();
  }
  render(){
    return(
      <Container>
       <PageHeader />
         <Content>
          <Text>
          asdasd{this.props.asd}
          </Text>
         </Content>
       <PageFooter />
     </Container>
    );
  }

}
