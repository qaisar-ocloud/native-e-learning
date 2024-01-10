import React, { Component } from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import auth from '../../../assets/auth.png';
import colors from '../../../utils/colors'
import google from "../../../assets/google.png"
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from "@clerk/clerk-expo";
import {useWarmUpBrowser} from '../../../hooks/warmUpBrowser'
WebBrowser.maybeCompleteAuthSession();

export const LoginScreen =({ fontsLoaded })=> {   
    if (!fontsLoaded) {
      return null; // or loading indicator
    }
    useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={auth} />
        <View style={styles.banner}>
          <Text style={styles.authHeading}>Ocloud</Text>
          <Text style={styles.authText}>Your Ultimate Programming partner</Text>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image style={{ height: 20, width: 20 }} source={google} />
            <Text style={{ fontSize: 20, color: colors.PRIMARY }}> Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  image: {
    width: 250,
    height: 500,
    marginTop: 70,
    objectFit: 'contain',
  },
  banner: {
    width: "100%",
    height: 400,
    padding: 20,
    marginTop: -50,
    backgroundColor: colors.PRIMARY
  },
  authHeading: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 35,
    color: colors.WHITE,
    fontFamily: "outfit-bold"
  },

  authText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.WHITE,
    fontFamily: "outfit-medium",
    marginTop:25

  },
  button: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    marginTop:20
  }
});

export default LoginScreen;
