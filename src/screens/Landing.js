import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
  },
});

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native Giphy</Text>
      <Button title="Let's Go" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default LandingScreen;
