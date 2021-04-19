import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Button(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.loremIpsum}>{props.buttontext}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 140,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 15,
    alignContent: "center",
    alignSelf: "center",
    marginTop: 10
  }
});

export default Button;
