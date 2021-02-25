import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:"45%"
  },
  gifs: {
    width: 280,
    height: 280,
    borderRadius: 10,
  },
});

const Gif = ({ gif }) => {
  return (
    <View style={styles.container}>
      <Text>Title: {gif.title ? gif.title : "Unknown"}</Text>
      <Image
        style={styles.gifs}
        source={{
          uri: `${gif.image_url}`,
        }}
      />
      <Text>By: {gif.username ? gif.username : "Unknown"}</Text>
    </View>
  );
};

export default Gif;
