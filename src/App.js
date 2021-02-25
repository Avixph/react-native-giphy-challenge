import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./screens/Landing";
import HomeScreen from "./screens/Home";

const RootStack = createStackNavigator();
const styles = StyleSheet.create({
  container: {   
    backgroundColor: "#e0e0e0",
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Landing"
          component={LandingScreen}
          style={styles.container}
        />
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          style={styles.container}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
