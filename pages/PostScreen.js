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
import IonIcons from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: ''
    }
  }
  componentDidMount() {
    this.setData();
  }
  setData() {
    this.setState({ data: this.props.route.params.data })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{this.state.data.authorName}</Text>
        <Image source={require('../assets/image_3.jpg')} style={styles.image} />
        <Text style={styles.text}>{this.state.data.caption}</Text>
        <TouchableOpacity style={styles.touchableOpacity}>
          <IonIcons name={"heart"} color={"white"} size={RFValue(30)}>
            <Text>12K</Text>
          </IonIcons>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1
  },

  touchableOpacity: {
    borderRadius: 20,
    backgroundColor: 'red',
    width: 200,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  heading: {
    color: '#ffffff',
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
