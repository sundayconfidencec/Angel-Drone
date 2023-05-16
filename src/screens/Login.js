import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {LoginAccount, } from "../redux/actions/AuthAction";
import { dispatchUser } from "../redux/actions/AuthAction";

 class Login
 extends Component {
  constructor(props){
    super(props)
    this.state = {
        email: "",
        password: "",
    }
}
handleUpdateState = (name,value)=>{
  this.setState({
    [name]: value
  })
}
handleSubmit = ()=>{
  this.props.LoginAccount(this.state.email,this.state.password)
    // Reset the input fields after successful registration
this.setState({
email: "",
password: "",
});
}
  render() {
    const { navigation, auth } = this.props
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
        <Text style={styles.loginHead}>Login</Text>
        </View>
        <View style={styles.loginTextContainer}>
        {auth.error.login && 
        <Text style={{color: "red"}}>{auth.error.login}</Text>
          }
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"#aaaaaa"}  
             autoCapitalize={false}
              autoCorrect={false}
              value={this.state.email}
              onChangeText={(text)=>{this.handleUpdateState("email", text)}} />

        <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"#aaaaaa"} 
        secureTextEntry={true} 
        autoCapitalize="none"
              autoCorrect={false}
              value={this.state.password}
              onChangeText={(text)=>{this.handleUpdateState("password", text)}}/>
        <Text style={styles.forgotPassword}> Forgot Password</Text>
        </View>
        <View>
        
      </View>
      <TouchableOpacity onPress={this.handleSubmit} style={styles.bottonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.noAccountCountainer}>
        <Text style={styles.noAccountText}>Don't have an Account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>

        <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
container:{
  paddingHorizontal:30,
  backgroundColor: "white",
},
loginHead:{
    fontSize: 50,
color: "#5100ad",
fontWeight: "400",
paddingTop: 100,

},
loginTextContainer:{
    marginBottom: 30,
},
input:{
borderBottomWidth: 2,
borderBottomColor:"#5100ad",
fontSize: 20,
height: 50,
marginTop:20

},
forgotPassword:{
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#0853a8",

},
bottonContainer:{
height:50,
backgroundColor: "#5100ad",
justifyContent: "center",
alignItems: "center",
borderRadius: 10,
marginVertical: 50,
},
buttonText:{
    color:"white",
    fontSize: 25,
},
noAccountCountainer:{
    flexDirection: "row",
    justifyContent: "center",

},
noAccountText:{
    marginRight: 10,
    fontSize: 15,

},
signupText:{
    fontSize: 15,
    color: "#5100ad"
}
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchUser: (user) => dispatch(dispatchUser(user))
//   };
// };

//const mapStateToProps = (state) => {
  //return {
    // Specify the props you want to map from the state
    // email: state.email,
    // password: state.password,
    // ...other props
  //};
//};

const mapStateToProps = (state) => {
  return { auth:state}
};
export default connect(mapStateToProps, {LoginAccount})(Login);