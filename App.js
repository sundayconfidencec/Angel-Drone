import { StyleSheet,View} from 'react-native';
import React, { Component } from 'react';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
          <View style={styles.container}>
            
             <Signup />
          </View>
    )
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 40,
    flex:1
  }
  
});
