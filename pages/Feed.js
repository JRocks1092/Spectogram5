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
  FlatList,
  ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import PostCard from '../components/PostCard';

const data = require('../trmpdata.json');

export default class App extends React.Component {

  renderItems = (data) => {    
    return (
      <PostCard cardData={data.item} navigation = {this.props.navigation}/>
    );
  }

  ItemSeparator = () => (
    <View
      style={{
        height: 10,
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaView>

            <Image style={styles.image} source={require('../assets/logo.png')} />

            <FlatList
              keyExtractor={(item) => item.authorName}
              data={data}
              renderItem={(item) => this.renderItems(item)}
              ItemSeparatorComponent={this.ItemSeparator}
            />
            <Text style={{ marginTop: 20 }}></Text>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
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
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
