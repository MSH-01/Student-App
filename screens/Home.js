import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Text, View, Modal, StatusBar } from "react-native";
import { ScrollView } from "react-native";
import NewsCard from "../components/NewsCard";
import SubjectCard from "../components/SubjectCard";
import * as firebase from "firebase";

import db from "../config/firebase";
import moment from "moment";
import NewsOverlay from "../components/NewsOverlay";

// sets state for the home page
class Home extends React.Component {
  // beginning of class instanciates the required states
  state = {
    email: "",
    displayName: "",
    url: "",
    isVisible: false,
    user: "",
    news: "",
    report1: false,
    report2: false,
    report3: false,
    newsStory: {},
    gradeCard: {}
  };

  //function to retrieve news from firebase
  takenews = () => {
    //creates variable for the UNIX timestamp of current month
    var month = moment()
      .startOf("month")
      .format("X");
    console.log(month);
    // queries the firebase where the name of document == month UNIX timestamp
    let newsRef = db.collection("news").doc(month);

    let getDoc = newsRef
      .get()
      .then(doc => {
        // if statement to check output of the retrieval function
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          const newsStory = doc.data();
          // sets state of newsStory to the object of the document
          this.setState({ newsStory });
        }
      })
      // if firebase returns error, it is caught here
      .catch(err => {
        console.log("Error getting document", err);
      });
  };

  // function to retrieve the current user's grade
  takegrades = () => {
    // firebase query to set variable to the collection reference.
    let gradesRef = db.collection("gradecards");
    let query = gradesRef
      // query the firebase where the value of current equals true
      .where("current", "==", true)
      .get()
      .then(snapshot => {
        // using a snapshot, adding each item in the firebase matching the query to a JSON object
        if (snapshot.empty) {
          console.log("No matching grades.");
          return;
        }

        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
          const Grades = doc.data();
          this.setState({ gradeCard: Grades });
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  };

  componentDidMount() {
    const { email, username } = firebase.auth().currentUser;
    // setting the varaible of email and username to equal that of the return from the currentUser function

    this.setState({ email: email });
    this.setState({ displayName: username });
    // call the retrieval functions to run on start
    this.takenews();
    this.takegrades();

    // sign out function handled by firebase
    signOutUser = () => {
      firebase.auth().signOut();
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scrollArea}>
          <StatusBar barStyle="dark-content" />
          <ScrollView>
            <NewsCard
              //usings props from required by the component
              newsRoute={() => this.setState({ isVisible: true })}
              newsPhoto={this.state.newsStory.photo}
              style={styles.newsCard}
              newsSchool={this.state.newsStory.school}
              newsTitle={this.state.newsStory.title}
            />
            <NewsOverlay
              OverlayVisible={this.state.isVisible}
              OverlayTitle={this.state.newsStory.title}
              OverlaySchool={this.state.newsStory.school}
              OverlayStory={this.state.newsStory.story}
              OverlayClose={() => this.setState({ isVisible: false })}
            />

            <View
              style={{
                width: 300,
                height: 400,
                backgroundColor: "rgba(230,230,230,1)",
                borderRadius: 28,
                shadowColor: "black",
                shadowRadius: 10,
                shadowOpacity: 0.1,
                shadowOffset: { height: 0 },
                marginLeft: 40,
                marginTop: 70,
                marginBottom: 50
              }}
            >
              <Text style={styles.header}>Report Cards</Text>
              <SubjectCard
                style={styles.subjectCard}
                subjectColor={{ backgroundColor: "#5BC0EB" }}
                subjectText={this.state.gradeCard.subject1}
                showreport={() => this.setState({ report1: true })}
              />
              <Modal
                animationType="slide"
                visible={this.state.report1}
                presentationStyle="formSheet"
                onDismiss={() => this.setState({ report1: false })}
              >
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 70,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject1grade}
                </Text>
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject1report}
                </Text>
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject1teacher}
                </Text>
              </Modal>
              <SubjectCard
                style={styles.subjectCard2}
                subjectColor={{ backgroundColor: "#F25757" }}
                subjectText={this.state.gradeCard.subject2}
                showreport={() => this.setState({ report2: true })}
              />
              <Modal
                animationType="slide"
                visible={this.state.report2}
                presentationStyle="formSheet"
                onDismiss={() => this.setState({ report2: false })}
                onRequestClose={() => this.setState({ report2: false })}
              >
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 70,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject2grade}
                </Text>
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject2report}
                </Text>
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject2teacher}
                </Text>
              </Modal>
              <SubjectCard
                showreport={() => this.setState({ report3: true })}
                style={styles.subjectCard3}
                subjectColor={{ backgroundColor: "#F2E863" }}
                subjectText={this.state.gradeCard.subject3}
              />
              <Modal
                animationType="slide"
                visible={this.state.report3}
                presentationStyle="formSheet"
                onDismiss={() => this.setState({ report3: false })}
              >
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 70,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject3grade}
                </Text>
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject3report}
                </Text>
                <Text
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingTop: 50,
                    fontSize: 25,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.gradeCard.subject3teacher}
                </Text>
              </Modal>
            </View>
            <View>
              <Text></Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const mapStateToProps = state => {
  //bind the values of the states in this file to equal the props passed on. REDUX
  return {
    post: state.post,
    user: state.user,
    followers: state.followers,
    news: state.news
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
