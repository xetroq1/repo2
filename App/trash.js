
// Session.set('userId','555');
// console.log(await Session.get('userId'));
// console.log(this.state.isLogged);
// Session.get('userId').then(response => {
//   // this.state = {
//   //   isLogged: response,
//   //   }
//   this.setState({isLogged: response});
// });
// if(AsyncStorage.getItem('authtoken') !== null){
// this.getDataFromStorage();
// }
// this.get().then(response => {
//   this.setState({isLogged: response});
//   });


  // async getDataFromStorage() {
  //     AsyncStorage.getItem('authtoken').then((token) => {
  //         this.setState({ authtoken: token });
  //         console.log(this.state.authtoken);
  //     });
  //     AsyncStorage.getItem('data').then((dataStorage) => {
  //         this.setState({ data: JSON.parse(dataStorage) });
  //         console.log(this.state.data);
  //     });
  // }

  // get = async () => {
  //   // return "APPLE";
  //   try {
  //     if (await AsyncStorage.getItem('userId') == null) {
  //       // await AsyncStorage.setItem(name, 'asddd');
  //       // console.log('session if');
  //       return "false";
  //     }else {
  //       // console.log('session else');
  //       // console.log(await AsyncStorage.getItem(name));
  //       return await AsyncStorage.getItem('userId');
  //     }
  //   } catch (e) {
  //     // console.log('err XXX');
  //     return "false";
  //   }
  // }

  // const asd = (Session.get('userId'));
  // console.log(asd);
  // console.log("here");
  // Session.get('userId').then(response => {
  //   });
  // console.log(isLogged);
