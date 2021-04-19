import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TaskInformation from "../components/TaskInformation";

function TaskCard(props) {
  return (
    <View style={props.taskcolor}>
      <TaskInformation
        taskinfovisible={props.TaskInfoV}
        taskname={props.TaskInfoName}
        tasksubject={props.TaskInfoSubject}
        taskdescription={props.TaskInfoDesc}
        removeinfo={props.TaskInfoRemove}
        color={props.TaskInfoColor}
      />
      <TouchableOpacity style={styles.button} onPress={props.taskdetails}>
        <View style={styles.content}>
          <Text style={styles.subjectText}>{props.taskSubject}</Text>
          <Text style={styles.nameText}>{props.taskName}</Text>
          <Text style={styles.descText}>{props.taskDesc}</Text>
          <Text style={styles.timeText}>{props.taskTime}</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: "rgba(0, 0, 0, .1)",
          borderBottomWidth: 3
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: "100%",
    height: 100
  },
  content: {
    paddingLeft: 20,
    paddingTop: 10
  },
  subjectText: {
    color: "white",
    fontWeight: "500",
    opacity: 0.5,
    fontSize: 10
  },
  nameText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40
  },
  timeText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 20,
    marginBottom: 50,
    bottom: "34%",
    fontSize: 30
  },
  descText: {
    color: "white",
    fontWeight: "400"
  }
});

export default TaskCard;
