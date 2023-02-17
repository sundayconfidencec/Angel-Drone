import React, { Component } from 'react'
import { TextInput, TouchableOpacity, View, StyleSheet, Text, ScrollView} from 'react-native'

export default class 
 extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
        <Text style={styles.loginHead}>Login</Text>
        </View>
        <View style={styles.loginTextContainer}>
        <TextInput style={styles.input} placeholder="username" placeholderTextColor={"#aaaaaa"}  
             autoCapitalize={false}
              autoCorrect={false}
              value={this.state.username}
              onChangeText={(username)=> {
                console.log(username)
                this.setState({username : username})}}/>

        <TextInput style={styles.input} placeholder="password" placeholderTextColor={"#aaaaaa"} 
        secureTextEntry={true} 
        autoCapitalize="none"
              autoCorrect={false}
              value={this.state.password}
              onChangeText={(password)=> {
                console.log(password)
                this.setState({password:password})
              }}/>
        <Text style={styles.forgotPassword}> Forgot Password</Text>
        </View>
        <View>
        
      </View>
      <TouchableOpacity style={styles.bottonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.noAccountCountainer}>
        <Text style={styles.noAccountText}>Don't have an Account?</Text>
        <Text style={styles.signupText}>Sign Up</Text>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
container:{
    marginHorizontal:50,
},
loginHead:{
    fontSize: 50,
color: "#5100ad",
fontWeight: "400"
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