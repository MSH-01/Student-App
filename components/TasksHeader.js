import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";

function TasksHeader(props) {
  signOutUser = () => {
    firebase.auth().signOut();
  };
  return (
    <View>
      <View style={styles.icon2StackRow}>
        <TouchableOpacity onPress={this.signOutUser}>
          <View style={styles.icon2Stack}>
            <FeatherIcon name="more-horizontal" style={styles.icon2} />
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.iconStack}>
            <EntypoIcon name="circle-with-plus" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textStackRow}>
        <TouchableOpacity>
          <View style={styles.textStack}>
            <Text style={styles.home}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.tasksStack}>
            <Text style={styles.tasks}>Tasks</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.accountStack}>
            <Text style={styles.account}>Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  plus: {
    height: 50,
    width: 50
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(74,144,226,1)",
    fontSize: 25
  },
  button4: {
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    position: "absolute"
  },
  icon2Stack: {
    width: 25,
    height: 25
  },
  icon: {
    top: 0,
    left: 100,
    position: "absolute",
    color: "rgba(74,144,226,1)",
    fontSize: 25
  },
  button5: {
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    position: "absolute"
  },
  iconStack: {
    width: 50,
    height: 25,
    left: 100
  },
  icon2StackRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 20,
    marginRight: 20
  },
  home: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    opacity: 0.3
  },
  button3: {
    top: 0,
    left: 2,
    width: 82,
    height: 30,
    position: "absolute"
  },
  textStack: {
    width: 85,
    height: 1000
  },
  tasks: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    color: "black",
    width: 1000,
    height: 1000
  },
  tasksStack: {
    width: 74,
    height: 30,
    marginLeft: 33
  },
  account: {
    top: 0,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    opacity: 0.3,
    fontSize: 25,
    fontWeight: "bold"
  },
  button2: {
    top: 0,
    left: 0,
    width: 114,
    height: 30,
    position: "absolute"
  },
  accountStack: {
    width: 116,
    height: 30,
    marginLeft: 31
  },
  textStackRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 18,
    marginRight: 18
  },
  scrollArea: {
    width: 375,
    height: 675,
    marginTop: 25
  },
  scrollArea_contentContainerStyle: {
    width: 375,
    height: 900,
    flexDirection: "column"
  },
  newsCard: {
    width: 308,
    height: 396,
    alignSelf: "center"
  },
  rect: {
    width: 308,
    height: 396,
    backgroundColor: "rgba(216,216,216,1)",
    borderRadius: 28,
    marginTop: 65,
    alignSelf: "center"
  },
  title: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 8,
    marginTop: 27,
    marginLeft: 23
  },
  header: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 6,
    marginLeft: 22
  },
  subjectCard: {
    width: 257,
    height: 75,
    marginTop: 20,
    marginLeft: 25
  },
  subjectCard2: {
    width: 257,
    height: 75,
    marginTop: 23,
    marginLeft: 25
  },
  subjectCard3: {
    width: 257,
    height: 75,
    marginTop: 24,
    marginLeft: 25
  }
});

export default TasksHeader;
