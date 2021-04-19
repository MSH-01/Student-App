import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  DatePickerIOS,
  Alert,
  Modal
} from "react-native";
import { Overlay } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import db from "../config/firebase";
import moment from "moment";

export default class TaskOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDate: "",
      taskSubject: "",
      taskDesc: "",
      taskUser: this.props.email,
      taskComplete: {},
      taskColor: "",
      buttonColor: "",
      chosenDate: new Date()
    };

    this.setDate = this.setDate.bind(this);

    sendTask = () => {
      const taskRef = db.collection("tasks");
      console.log(this.state.taskName);
      time = moment().format("X");

      let setTask = taskRef
        .doc(time + this.props.email)
        .set({
          color: this.state.taskColor,
          completed: false,
          description: this.state.taskDesc,
          duedate: this.state.taskDate,
          name: this.state.taskName,
          subject: this.state.taskSubject,
          user: this.props.email
        })
        .then(res => {
          Alert.alert("Task Added!");
          this.textInput.clear();
          console.log(res);
          this.props.hideOverlay();
        });
      console.log("task added");
      <TouchableOpacity>
        <Text>done</Text>
      </TouchableOpacity>;
    };
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Modal
        visible={this.props.OverlayVisible}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={this.props.OverlayClose}>
            <MaterialCommunityIcons
              style={{ paddingTop: 40, paddingRight: 350 }}
              name="close"
              size={30}
            />
          </TouchableOpacity>
          <Text
            style={{
              bottom: 28,
              fontSize: 17,
              fontWeight: "bold"
            }}
          >
            Add New Task
          </Text>
          <View
            style={{
              alignContent: "center",
              alignSelf: "center",
              alignSelf: "center",
              width: "100%"
            }}
          >
            {/* creates a larger input for taskname */}
            <View>
              <TextInput
                ref={newtask => {
                  this.textInput = newtask;
                }}
                placeholder="New Task"
                placeholderTextColor="rgba(0, 0, 0, .1)"
                multiline={false}
                autoCapitalize="words"
                style={styles.textInputName}
                value={this.state.taskName}
                maxLength={15}
                autoCorrect={true}
                onChangeText={taskName => this.setState({ taskName })}
                clearButtonMode="always"
              />
            </View>

            <View
              style={{
                width: "100%",
                borderBottomColor: "rgba(0, 0, 0, .1)",
                borderBottomWidth: 3
              }}
            />
            <ScrollView
              horizontal={true}
              style={{ width: "100%", paddingTop: 10 }}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flex: 1, flexDirection: "row", paddingTop: 5 }}>
                <TouchableOpacity
                  onPress={() => this.setState({ taskColor: "#F25757" })}
                >
                  <View
                    style={{
                      backgroundColor: "#F25757",
                      height: 30,
                      width: 100
                    }}
                  ></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ taskColor: "#F2E863" })}
                >
                  <View
                    style={{
                      backgroundColor: "#F2E863",
                      height: 30,
                      width: 100
                    }}
                  ></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ taskColor: "#F2CD60" })}
                >
                  <View
                    style={{
                      backgroundColor: "#F2CD60",
                      height: 30,
                      width: 100
                    }}
                  ></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ taskColor: "#5BC0EB" })}
                >
                  <View
                    style={{
                      backgroundColor: "#5BC0EB",
                      height: 30,
                      width: 100
                    }}
                  ></View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ taskColor: "#4E598C" })}
                >
                  <View
                    style={{
                      backgroundColor: "#4E598C",
                      height: 30,
                      width: 100
                    }}
                  ></View>
                </TouchableOpacity>
              </View>
            </ScrollView>
            {/* creates smaller inputs for other information */}
            <View style={styles.Input}>
              <TextInput
                ref={daysleft => {
                  this.textInput = daysleft;
                }}
                placeholder="Days Left"
                placeholderTextColor="rgba(0, 0, 0, .1)"
                multiline={false}
                style={styles.textInput}
                keyboardType="number-pad"
                maxLength={3}
                value={this.state.taskDate}
                onChangeText={taskDate => this.setState({ taskDate })}
              />
            </View>
            <View style={styles.Input}>
              <TextInput
                ref={subjectinput => {
                  this.textInput = subjectinput;
                }}
                placeholder="Subject"
                placeholderTextColor="rgba(0, 0, 0, .1)"
                multiline={false}
                autoCapitalize="characters"
                style={styles.textInput}
                value={this.state.taskSubject}
                onChangeText={taskSubject => this.setState({ taskSubject })}
              />
            </View>
            <View style={styles.InputDecription}>
              <TextInput
                ref={descinput => {
                  this.textInput = descinput;
                }}
                placeholder="Description"
                placeholderTextColor="rgba(0, 0, 0, .1)"
                multiline={true}
                style={styles.textInput}
                value={this.state.taskDesc}
                onChangeText={taskDesc => this.setState({ taskDesc })}
              />
            </View>
            <TouchableOpacity
              style={{
                alignSelf: "center"
              }}
              onPress={() => sendTask()}
            >
              <View
                style={{
                  backgroundColor: this.state.taskColor,
                  width: 120,
                  height: 50,
                  borderRadius: 15,
                  marginTop: 20,
                  marginBottom: 10
                }}
              >
                <Text style={styles.ButtonText}>Add Task</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          {/* <DatePickerIOS
            // style={{ color: "black", backgroundColor: "black" }}
            date={this.state.chosenDate}
            onDateChange={this.setDate}
            mode="date"
            initialDate=""
          /> */}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  textInput: {
    paddingTop: 12,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    width: "100%"
  },
  textInputName: {
    paddingTop: 12,
    fontSize: 30,
    fontWeight: "bold",
    color: "rgba(0, 0, 0,1)",
    width: "100%"
  },
  Input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(230, 230, 230,0.5)",
    marginTop: 20,
    marginBottom: 10
  },
  InputDecription: {
    width: "100%",
    height: 150,
    backgroundColor: "rgba(230, 230, 230,0.5)",
    marginTop: 20,
    marginBottom: 10
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    paddingTop: 12
  },
  Button: {
    width: 120,
    height: 50,
    borderRadius: 15,
    backgroundColor: "rgba(230, 230, 230,0.5)",
    marginTop: 20,
    marginBottom: 10
  }
});
