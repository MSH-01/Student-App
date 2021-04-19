import db from "../config/firebase";
import { Overlay } from "react-native-elements";
import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function NewStory() {
  sendnews = () => {
    let newsRef = db.collection("news");
    let date = faker.date.recent();

    let setDate = newsRef.doc(JSON.stringify(date)).set({
      photo: "",
      school: "",
      story: "",
      title: ""
    });
  };
  return <Overlay />;
}

export default NewStory;

function NewTasks() {
  sendtask = () => {
    let tasksRef = db.collection("tasks");
    let date = faker.date.recent();

    let setTask = tasksRef.doc(JSON.stringify(date)).set({
      user: "",
      information: "",
      subject: "",
      dueDate: ""
    });
  };
  return <Overlay />;
}

export default NewTasks;
