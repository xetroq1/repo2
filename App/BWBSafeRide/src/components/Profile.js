import React, { Component } from 'react';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import { Alert, View, StyleSheet, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, ListItem, List, Input, Label } from 'native-base';
export default class Profile extends Component {
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: () => (
            <Icon type="FontAwesome" name="user" style={{ fontSize: 22 }} />
        )
    };

    state = {
        userData: [],
        modalVisible: false
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount(){
        this.setUserData();
    }

    setUserData = async () => {
      if(await AsyncStorage.getItem('userData')){
          const data = JSON.parse(await AsyncStorage.getItem('userData'));
        this.setState({ userData: data });
      }
    }

    destroySession = async () => {
      await AsyncStorage.removeItem('userData');
      this.props.navigation.navigate('Logout');
      // Actions.dashboard();
      // PAGE REDIRECTION HERE
    }

    render() {
        return (
        <Container>
             <Modal
             animationType="slide"
             transparent={false}
             visible={this.state.modalVisible}
             >
                 <View style={styles.modal}>
                     <View style={{color: '#d3a04c'}}>
                         <Text>Update Profile</Text>
                     </View>
                    <View style={styles.inputWrap}>
                        <TextInput style={styles.inputBox2} placeholder="First Name" />
                        <TextInput style={styles.inputBox2} placeholder="Last Name" />
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput style={styles.inputBox2} placeholder="Email" keyboardType="email-address" />
                        <TextInput style={styles.inputBox2} placeholder="Phone Number" keyboardType="phone-pad" />
                    </View>
                    <TextInput style={styles.inputBox} placeholder="City" />
                    <TextInput style={styles.inputBox} placeholder="ZIP Code" keyboardType="number-pad" />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                         <Text style={styles.buttonText}>Close</Text>
                     </TouchableOpacity>
                 </View>
             </Modal>
          <Header>
           <Left style={{ flexDirection: 'row' }}>
             <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: '#d3a04c', marginRight: 15 }} />
           </Left>
           <Right>
             <Button onPress={() => this.destroySession()} ><Text>Log Out</Text></Button>
           </Right>
          </Header>
          <Content>
           <View style={styles.header}></View>
           <Image style={styles.avatar} source={require('../assets/images/avatar.png')}/>
           <View style={styles.body}>
             <View style={styles.bodyContent}>
               <Text style={styles.name}>{this.state.userData.first_name} {this.state.userData.last_name}</Text>
               <Text style={styles.info}>{this.state.userData.username}</Text>
               <List>
                <ListItem>
                    <Text style={styles.description}>Email Address:  </Text>
                    <Text style={styles.description}>{this.state.userData.email}</Text>
                </ListItem>
                <ListItem>
                  <Text style={styles.description}>Contact Number:  </Text>
                  <Text style={styles.description}>{this.state.userData.contact_number}</Text>
                </ListItem>
              </List>
               <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.setModalVisible(true); }}>
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
    fontWeight: "600",
    textTransform: 'capitalize'
  },
  info:{
    fontSize:16,
    color: "#d3a04c",
    marginTop:10
  },
  description:{
    fontSize:14,
    color: "#696969"
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
},
modal: {
    marginTop: 20,
    backgroundColor: 'white',
   alignSelf: 'center',
   alignItems: 'center'
},
inputWrap: {
    flexDirection: 'row'
},
inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 2,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#002f6c',
    marginVertical: 10,
    paddingVertical: 8
},
inputBox2: {
    width: 145,
    backgroundColor: '#eeeeee',
    borderRadius: 2,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#002f6c',
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingVertical: 8
}
});
