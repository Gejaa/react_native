const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      paddingHorizontal: 20
  },
  textFieldStyle: {
      paddingLeft:5,
      paddingRight:5,
      borderRadius: 5,
      minHeight: 35,
      maxHeight: 100,
      borderWidth: 2,
      borderColor: "black",
      // width: windowWidth >=450?200:windowWidth/1.5
  },
  sizedBox: {
      height: 10
  },
  sizedBoxBig: {
      height: 20
  },
  loginFont: {
      fontSize: 30,
      fontWeight: 'bold'
  },
  signupFont: {
      fontSize: 12,
      textDecorationLine: 'underline',
      textDecorationColor:'#2196f3',
  },
  setColorBlue: {
      color: '#2196f3'
  },
  errorFont:{
      fontSize: 12,
      color: '#f44336',
  },
  submit: {
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#2196f3',
      borderRadius: 10,
      borderWidth: 1,
      borderRadius: 50,
      // width: windowWidth >=500?'50%':'80%',
      borderColor: '#fff',
  },
  submitText: {
      color: 'white',
      fontSize: 20,
      fontStyle: 'bold',
      textAlign: 'center',
  },
  content: {
    padding: 30,
    flex:1
    },
    list: {
    marginTop: 30,
    flex:1
    },
    
        item: {
            padding: 15,
            borderColor: 'black',
            borderRadius: 5,
            borderWidth: 1,
            marginTop: 15,
            flexDirection: "row",
justifyContent: 'space-between',
            },
            input: {
                margin: 10,
                paddingVertical: 6,
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
            
                },
                icons:{
                    marginRight:10,
                }
        
});
export default styles;
