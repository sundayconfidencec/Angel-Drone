import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity , FlatList} from 'react-native';
import React, { Component } from 'react'
import Login from "./Login";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      names:["onye", "kemmy", "winny", "fred", "confy","onye", "kemmy", "winny", "fred", "confy","onye", "kemmy", "winny", "fred", "confy","onye", "kemmy", "winny", "fred", "confy","onye", "kemmy", "winny", "fred", "confy","onye", "kemmy", "winny", "fred", "confy",]
    }
  }
  render() {
    return (
          <View style={styles.container}>
              <Text>AngelDrone</Text>
              <TextInput style={[styles.input]}
              placeholder="your name" 
              autoCapitalize={true}
              autoCorrect={true}
              value={this.state.name}
              onChangeText={(name)=> {
                this.setState({name : name})
              }}
              />
              <TextInput style={[styles.input]}
              placeholder="your email" 
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={(email)=> {
                this.setState({email : email})
              }}
              />
              <TextInput style={[styles.input]}
              placeholder="your password" 
              autoCapitalize="none"
              secureTextEntry={true}
              autoCorrect={false}
              value={this.state.password}
              onChangeText={(password)=> {
                this.setState({password:password})
              }}
              />
              <View>
              <TouchableOpacity  style={[styles.buttonContainer]}>
                <Text style={[styles.buttonText]}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonContainer]}>
                <Text style={[styles.buttonText]}>Login</Text>
              </TouchableOpacity>
              </View>

             <Login/>
            </View>
    )
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex:1
  },
  input:{
    backgroundColor: "blue",
    height:60,
    marginLeft: 15
  },
  buttonText:{
    fontSize:20,
    color:"white"
  },
  buttonContainer:{
    marginHorizontal: 20,
    backgroundColor: "#0091E7",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,

  }
});
