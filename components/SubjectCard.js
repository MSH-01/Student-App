import React, { Component, useReducer } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import ReadButton from "./ReadButton";

function SubjectCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.button, props.subjectColor]}>
        <View style={styles.subjectRow}>
          <Text style={styles.subject}>{props.subjectText}</Text>
          <ReadButton style={styles.readButton} route={props.showreport} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 257,
    height: 75,
    backgroundColor: "#11ADE7",
    borderRadius: 10,
    flexDirection: "row"
  },
  subject: {
    fontSize: 25,
    fontWeight: "bold"
  },
  readButton: {
    position: "absolute",
    width: 62,
    height: 24,
    marginLeft: 160,
    marginTop: 3
  },
  subjectRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 18,
    marginTop: 22
  }
});

export default SubjectCard;
