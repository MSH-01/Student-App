import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function ReadButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button} onPress={props.route}>
        <Text style={styles.read}>READ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 62,
    height: 24,
    backgroundColor: "#ffffff",
    borderRadius: 10
  },
  read: {
    color: "#007AFF",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 3,
    marginLeft: 10
  }
});

export default ReadButton;
