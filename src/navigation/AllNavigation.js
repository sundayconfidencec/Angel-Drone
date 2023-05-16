import { StyleSheet,View, Text, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import Signup from "../screens/Signup"
import Login from '../screens/Login';
import Contacts from '../screens/Contacts';
import {NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { Logout } from '../redux/actions/AuthAction';

const stack = createStackNavigator()

function AllNavigation({auth, Logout}) {
  return (
             <NavigationContainer>
                {
                    auth.login ? 
                    //show contacts

                    <stack.Navigator initialRouteName='Signup' >
                    <stack.Screen name='Contacts' component={Contacts} options={({ navigation }) => ({
                    title: 'Contacts',
                    headerStyle: { backgroundColor: 'white' },
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                    <TouchableOpacity 
                    onPress={Logout}
                    style={{ marginRight: 20 }}>
                   <Text> Logout</Text>
                    </TouchableOpacity> )
                    })}
                  />
                 </stack.Navigator>
                    :

                    //show login & register


              <stack.Navigator initialRouteName='Login' >
              <stack.Screen name='Login' component={Login}  options={{headerShown: false}}/>
              <stack.Screen name='Signup' component={Signup} options={{headerShown: false}} />
           </stack.Navigator>

                }

             </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 40,
    flex:1
  }
  
});

const mapStateToProps = (state) => {
    return { auth:state}
  };
export default connect(mapStateToProps,{Logout})(AllNavigation);