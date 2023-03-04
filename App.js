import { StyleSheet,View} from 'react-native';
import React, { Component } from 'react';
import Signup from './Signup';
import Login from "./Login";
import {NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <stack.Navigator initialRouteName='Signup' screenOptions={{header: ()=> null}}>
        <stack.Screen name='Signup' component={Signup} />
        <stack.Screen name='Login' component={Login} />
      </stack.Navigator>

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
