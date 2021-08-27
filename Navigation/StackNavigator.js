import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../pages/PostScreen';
import TabNavigator from './TabNavigator';
import LoadingScreen from '../pages/LoadingScreen';
import LoginScreen from '../pages/LoginScreen';
import DashBoardScreen from '../pages/DashBoard'; 

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen component={LoadingScreen} name="LoadingScreen" options = {{ headerShown:false }}/>
                <Stack.Screen component={LoginScreen} name="LoginScreen" options = {{ headerShown:false }}/>
                <Stack.Screen component={DashBoardScreen} name="DashBoardScreen" options = {{ headerShown:false }}/>                
                <Stack.Screen component={TabNavigator} name="TabNavigator" options = {{ headerShown:false }}/>
                <Stack.Screen component={PostScreen} name="PostScreen" options={{ headerTitle: 'Post' }} />
            </Stack.Navigator>
        );
    }
}