import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as firebase from "firebase";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import db from "../config/firebase";
import { getUser } from "../actions/user";
import TaskCard from "../components/TaskCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import TaskOverlay from "../components/TaskOverlay";
import { Overlay } from "react-native-elements";
import TaskInformation from "../components/TaskInformation";

class Tasks extends React.Component {
  //sets the props for the component constructor.
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      query: [],
      newTaskVisible: false,
      // set to be an array of objects
      tasks: [],
      email: "",
      username: "",
      // object
      user: {},
      // used when tasks cards color is defined by random number gen
      bgColor: ["#F25757", "#F2E863", "#F2CD60", "#5BC0EB", "#4E598C"],
      selectedColor: "",
      taskInfo: false
    };
  }

  taketasks = () => {
    // let taskRef = db
    //   .collection("tasks")
    //   .where("user", "==", "mohammed.s.hussain@outlook.com");

    // let getDoc = taskRef
    //   .get()
    //   .then(doc => {
    //     if (!doc.exists) {
    //       console.log("No such document!");
    //     } else {
    //       console.log("Document data:", doc.data());
    //       const Task = doc.data();
    //       this.setState({ Task });
    //     }
    //   })
    //   .catch(err => {
    //     console.log("Error getting document", err);
    //   });
    let taskRef = db.collection("tasks");
    // calls the get random color function for the cards
    this._getRandomColor();
    // queries database against the value of user being equal to current user email
    let query = taskRef
      .where("user", "==", this.state.email)
      .get()
      .then(snapshot => {
        this.setState({ tasks: [] });
        // if no documents found in the query
        if (snapshot.empty) {
          console.log("No matching documents.");
          //test
          console.log(this.state.tasks.color);
          return;
        }
        // for each document found add the JSON object to array
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
          const Task = doc.data();
          this.setState({ tasks: [...this.state.tasks, Task] });
        });
      })
      // check for errors
      .catch(err => {
        console.log("Error getting documents", err);
      });
  };

  // function to navigate to profile.
  goToUser = user => {
    this.props.getUser(user.uid);
    this.props.navigation.navigate("Profile");
  };

  // picks a random color
  _getRandomColor() {
    // array bgColor is queried with function- stored item
    var item = this.state.bgColor[
      Math.floor(Math.random() * this.state.bgColor.length)
    ];
    // sets state of color to item
    this.setState({
      selectedColor: item
    });
  }

  componentDidMount() {
    // variables for email and username retrieved.
    const { email, username } = firebase.auth().currentUser;
    this.setState({ email, username });

    // call function task tasks so that new tasks are rendered.
    this.taketasks();

    signOutUser = () => {
      firebase.auth().signOut();
    };
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/*maps every object in the array onto a new task card */}
          {this.state.tasks.map(task => {
            return (
              <View>
                <TaskCard
                  taskSubject={task.subject}
                  taskName={task.name}
                  taskDesc={task.description}
                  taskTime={task.duedate}
                  taskcolor={{ backgroundColor: task.color }}
                  taskdetails={() => this.setState({ taskInfo: true })}
                  TaskInfoV={this.state.taskInfo}
                  TaskInfoName={task.name}
                  TaskInfoSubject={task.subject}
                  TaskInfoDesc={task.description}
                  TaskInfoRemove={() => this.setState({ taskInfo: false })}
                  TaskInfoColor={task.color}
                />
              </View>
            );
          })}
          <View>
            {/* <TouchableOpacity
              style={styles.plusButton}
              onPress={() => this.setState({ newTaskVisible: true })}
            > */}
            {/* <View style={{ left: "45%", paddingTop: 35 }}>
                <MaterialCommunityIcons
                  style={{ opacity: 0.5 }}
                  name="plus"
                  size={32}
                />
              </View> */}
            <TaskOverlay
              OverlayVisible={this.state.newTaskVisible}
              BackdropPress={() => this.setState({ newTaskVisible: false })}
              OverlayClose={() => this.setState({ newTaskVisible: false })}
              email={this.state.email}
              hideOverlay={() => this.setState({ newTaskVisible: false })}
            />
            {/* </TouchableOpacity> */}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingTop: 5,
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 20
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              width: 40,
              height: 40,
              shadowColor: "black",
              shadowRadius: 10,
              shadowOpacity: 0.1,
              shadowOffset: { height: 0 },
              marginRight: 20
            }}
          >
            {/* button to add new task*/}
            <TouchableOpacity
              onPress={() => this.setState({ newTaskVisible: true })}
            >
              <MaterialCommunityIcons
                style={{
                  color: "#000000",
                  alignContent: "center",
                  alignSelf: "center",
                  paddingTop: 4
                }}
                name="plus"
                size={32}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              width: 40,
              height: 40,
              shadowColor: "black",
              shadowRadius: 10,
              shadowOpacity: 0.1,
              shadowOffset: { height: 0 }
            }}
          >
            {/* button to refresh tasks list*/}
            <TouchableOpacity onPress={() => this.taketasks()}>
              <MaterialCommunityIcons
                style={{
                  color: "#000000",
                  alignContent: "center",
                  alignSelf: "center",
                  paddingTop: 4
                }}
                name="refresh"
                size={32}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser }, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
