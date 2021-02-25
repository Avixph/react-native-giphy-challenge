import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RandomGifAPI } from "../services/giphy_API";
import Header from "./Header";
import Gif from "./Gif";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e1",
  },
});

const HomeScreen = () => {
  const [gif, setGif] = useState([]);

  const fetchRandomGif = async () => {
    const randGif = await RandomGifAPI();
    setGif(randGif.data);
  };
  useEffect(() => {
    fetchRandomGif();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Button title="Gif Me" onPress={fetchRandomGif} />
      <Gif gif={gif} />
    </View>
  );
};

export default HomeScreen;
