import { StyleSheet,View} from 'react-native';
import React, { Component } from 'react'
import Login from "./Login";
class App extends Component {
  render() {
    return (
          <View style={styles.container}>
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
  }
  
});
