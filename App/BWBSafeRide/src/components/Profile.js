import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Profile extends Component {
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: () => (
            <Icon type="FontAwesome" name="user" style={{ fontSize: 22 }} />
        )
    };

    state = {
        data: []
    }

    componentDidMount(){
        this.setUserData();
    }

  setUserData = async () => {
    if(await AsyncStorage.getItem('userData')){
      this.setState({
        userData: await AsyncStorage.getItem('userData'),
        });
        alert(this.state.userData);
    }
  }

    render() {
        const { userData } = this.state;
        // console.log(userData);
        // alert(userData);
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
          <Content>
           <View style={styles.header}></View>
           <Image style={styles.avatar} source={require('../assets/images/avatar.png')}/>
           <View style={styles.body}>
             <View style={styles.bodyContent}>
               <Text style={styles.name}>John Doe</Text>
               <Text style={styles.info}>UX Designer / Mobile developer</Text>
               <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

               <TouchableOpacity style={styles.buttonContainer}>
                 <Text style={styles.buttonText}>Update Profile</Text>
               </TouchableOpacity>
             </View>
         </View>
          </Content>
          <Footer>
              <FooterTab style={{backgroundColor:"#1c1b22"}}>
                  <Button vertical onPress={() => this.props.navigation.navigate('Dashboard')}>
                      <Icon name="apps" />
                      <Text>Dashboard</Text>
                  </Button>
                  <Button vertical>
                      <Icon name="map" />
                      <Text>Book Now</Text>
                  </Button>
                  <Button vertical>
                      <Icon name="navigate" />
                      <Text>Navigate</Text>
                  </Button>
              </FooterTab>
          </Footer>
         </Container>
       );
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#d3a04c",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
    backgroundColor: "white"
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#d3a04c",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#d3a04c",
  },
  buttonText: {
    color: '#fff'
  }
});
