import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text, ScrollView} from 'react-native';
import {connect } from 'react-redux';
import {SignupAccount, signupError} from "../redux/actions/AuthAction";
import { dispatchUser } from "../redux/actions/AuthAction";

class  Signup
 extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            registrationSuccess: false,
        }
    }
    handleUpdateState = (name,value)=>{
      this.setState({
        [name]: value
      })
    }
    handleSubmit = ()=>{
      if(this.state.password != this.state.confirmPassword){
        this.props.signupError("passwords did not match!")
        return;
      }
      this.props.SignupAccount(this.state.email,this.state.password)
        // Reset the input fields after successful registration
  this.setState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    registrationSuccess: true,
  });
    }
  render() {
    const { navigation, auth} = this.props
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
        <Text style={styles.loginHead}>Sign Up</Text>
        </View>
        
           {/* {this.state.registrationSuccess && (
          <Text sstyle={{color: "green"}}>Registration successful!</Text>
        )} */}
        <View style={styles.loginTextContainer}>
        {auth.error.signup && 
        <Text style={{color: "red"}}>{auth.error.signup}</Text>
          }
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor={"#aaaaaa"}  
             autoCapitalize={false}
              autoCorrect={false}
              value={this.state.username}
              onChangeText={(text)=>{this.handleUpdateState("username", text)}}/>

<TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"#aaaaaa"}
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={(text)=>{this.handleUpdateState("email", text)}}
          />

        <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"#aaaaaa"} 
        secureTextEntry={true} 
        autoCapitalize="none"
              autoCorrect={false}
              value={this.state.password}
              onChangeText={(text)=>{this.handleUpdateState("password", text)}}/>

<TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor={"#aaaaaa"}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.confirmPassword}
            onChangeText={(text)=>{this.handleUpdateState("confirmPassword", text)}}
          />


        
        </View>
        <View>
        
      </View>
     
      <TouchableOpacity
  style={styles.bottonContainer}
  onPress={() => {this.handleSubmit()
  }}
>
  <Text style={styles.buttonText}>Sign up</Text>
</TouchableOpacity>
      {/* <TouchableOpacity
  style={styles.bottonContainer}
  onPress={() => {
    const { username, email, password, confirmPassword } = this.state;
    const user = { username, email, password, confirmPassword };
    this.props.dispatchUser(user);
  }}
>
  <Text style={styles.buttonText}>Sign up</Text>
</TouchableOpacity> */}

      <View style={styles.noAccountCountainer}>
        <Text style={styles.noAccountText}>Already have an Account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>

        <Text style={styles.signupText}>Log in</Text>
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
paddingTop: 70,
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchUser: (user) => dispatch(dispatchUser(user))
//   };
// };

const mapStateToProps = (state) => {
  return { auth:state
    // Specify the props you want to map from the state
    // auth:state
    // username: state.username,
    // email: state.email,
    // password: state.password,
    // confirmPassword: state.confirmPassword
    // ...other props
  };
};

export default connect(mapStateToProps, {SignupAccount, signupError})(Signup);