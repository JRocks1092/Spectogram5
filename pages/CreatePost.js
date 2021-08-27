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
  ScrollView,
  TextInput
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Picker } from '@react-native-community/picker';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      image: require('../assets/image_1.jpg'),
      dropdownHeight: 170,
      caption: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={require("../assets/logo.png")} style={{ alignSelf: 'flex-start', width: 100, height: 100 }} />
          <Text style={styles.heading}>New Post</Text>
          <Image source={this.state.image} style={styles.image} />
          <View style={styles.subContainer}>
            <Picker
              itemStyle={styles.pickerItem}
              selectedValue={this.state.image}
              style={styles.picker}
              onValueChange={(value) => this.setState({ image: value })}>
              <Picker.Item label="Choose Image"/>
              <Picker.Item
                label="Image1"
                value={require('../assets/image_1.jpg')}
              />
              <Picker.Item
                label="Image2"
                value={require('../assets/image_2.jpg')}
              />
              <Picker.Item
                label="Image3"
                value={require('../assets/image_3.jpg')}
              />
              <Picker.Item
                label="Image4"
                value={require('../assets/image_4.jpg')}
              />
              <Picker.Item
                label="Image5"
                value={require('../assets/image_5.jpg')}
              />
              <Picker.Item
                label="Image6"
                value={require('../assets/image_6.jpg')}
              />
              <Picker.Item
                label="Image7"
                value={require('../assets/image_7.jpg')}
              />
            </Picker>

          </View>
          <TextInput placeholderTextColor="white" style={styles.textInput} placeholder='Caption' value={this.state.caption} onChangeText={(text) => this.setState({ caption: text })} numberOfLines={2} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 2
  },

  subContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    alignSelf:'center',
    height:70,
    marginTop: 50,
    width:'100%'
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
    color: '#ffffff',
    marginTop: -75,
    justifyContent: 'center',
    position: 'relative',
    marginLeft: 120,
    fontSize: 40,

  },

  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    height: 70,
    borderColor: 'white',
    color: 'white',
    width: '100%',
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
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'black'
  },

  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },

  picker: {
    backgroundColor: 'black',
    color: "white",   
  },

  pickerItem: {
    backgroundColor: 'white',
    color: "white",
    textAlign: 'center',
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
