import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: "30%",
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>I'm going to show random gifs!</Text>
    </View>
  );
};

export default Header;
