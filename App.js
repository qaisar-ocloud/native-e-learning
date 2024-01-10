import React from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./app/screens/Login/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import TabNavigation from "./Navigations/TabNavigation";
export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-light": require("./assets/fonts/Outfit-Light.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });
  return (
    <ClerkProvider publishableKey="pk_test_aGVscGluZy1iaXNvbi03NS5jbGVyay5hY2NvdW50cy5kZXYk">
      <View style={styles.container}>
        <SignedIn>
          <TabNavigation />
        </SignedIn>
        <SignedOut>
          <LoginScreen fontsLoaded={fontsLoaded} />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
});
