import React from 'react';
import { Text, Button, View } from 'react-native';
import * as Google from 'expo-google-app-auth';

export default class AuthScreen extends React.Component {
  
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      unsubscribe();
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {
            if (result.additionalUserInfo.isNewUser) {
              firebase
                .database()
                .ref("/users/" + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  locale: result.additionalUserInfo.profile.locale,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  current_theme: "dark"
                })
                .then(function (snapshot) { });
            }
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };
  
  signInWithGoogleAsync = async () => {
    console.log("hi")
    try {
      const result = await Google.logInAsync({
        behaviour: 'web',
        androidClientId: "281650545908-hr98ahg4m72eocha4t1ghgqgkf5j9b78.apps.googleusercontent.com",
        iosClientId: "281650545908-2ci8miikk37n1gf9mfchi09j85qtkh3a.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });
      if (result.type == 'success') {
        this.props.navigation.navigate("TabNavigator");
        return result.accessToken;
      }
      else {
        return { cancelled: true };
      }
    }
    catch (e) {
      return { error: true };
    }
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Button title="Sign in" onPress={() =>  this.signInWithGoogleAsync()}/>        
      </View>
    );
  }
}