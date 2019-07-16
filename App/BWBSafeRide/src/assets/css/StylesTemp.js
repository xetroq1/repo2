import { StyleSheet } from "react-native";

export default StyleSheet.create({
  sample:{
    color: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: '#d3a04c',
    fontSize:16
  },
  signupButton: {
      color: '#d3a04c',
      fontSize:16,
      fontWeight: '500',
      textDecorationLine: "underline"
  },
  containerBook: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  textStyle: {
      color: '#e3e3e3',
  },
  inputWrap: {
      flexDirection: 'row'
  },
  radioBox: {
      width: 300,
      backgroundColor: 'transparent',
      fontSize: 14,
      color: '#002f6c',
      marginVertical: 10,
      paddingVertical: 8
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
  },
  button: {
      width: 300,
      backgroundColor: '#d3a04c',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12
  },
  buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  }

});
