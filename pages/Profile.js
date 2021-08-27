import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.text}>hi</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex:1
  },

  touchableOpacity: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 50,
  },

  heading: {
    color: '#661111',
    alignSelf: 'center',
    fontSize: 40,    
  },

  textInput: {
    borderWidth: 3,
    borderRadius: 20,
    width: 200,
    marginTop: 50,
    alignSelf: 'center',
    textAlign: 'center',    
  },

  bg: {
    flex: 1,
    resizeMode: 'cover',
  },

  image: {   
    width: 300,
    height: 200,
    alignSelf: 'center',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 20,    
    textAlign: 'center',
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
