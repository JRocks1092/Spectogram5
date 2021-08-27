import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import firebase  from 'firebase';

export default class App extends React.Component {

  componentDidMount(){
    this.checkIfLoggedIn()
  }

  checkIfLoggedIn=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.navigation.navigate('DashBoardScreen');
      }else{
        this.props.navigation.navigate('LoginScreen');
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size = 'large'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },  
});
