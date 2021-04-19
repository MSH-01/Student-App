import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Modal
} from "react-native";
import { Overlay } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function TaskInformation(props) {
  return (
    <Overlay
      isVisible={props.taskinfovisible}
      width="auto"
      height="auto"
      fullScreen={false}
      onBackdropPress={props.removeinfo}
      overlayBackgroundColor={props.color}
    >
      <Text>{props.taskname}</Text>
      <Text>{props.tasksubject}</Text>
      <Text>{props.taskdescription}</Text>
    </Overlay>
  );
}

export default TaskInformation;
