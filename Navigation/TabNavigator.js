import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed1 from '../pages/Feed';
import CreateStory from '../pages/CreatePost';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        barStyle = {{ backgroundColor:'#000000'}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Create Post') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        activeColor={'white'}
        inactiveColor={'gray'}>
        <Tab.Screen
          name="Feed"
          component={Feed1}
          options={{ unmountOnBlur: true }}
        />

        <Tab.Screen
          name="Create Post"
          component={CreateStory}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#000000',
    height: '8%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: 'hidden',
    position: 'absolute',
  },
  bottomTabStyleLight: {
    backgroundColor: '#000000',
    height: '8%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: 'hidden',
    position: 'absolute',
  },

  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});
