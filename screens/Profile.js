import React from "react";
import styles from "../styles";
import firebase from "firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SubjectCard from "../components/SubjectCard";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import { followUser, unfollowUser } from "../actions/user";
import { Updates } from "expo";
import AdminLogin from "../components/AdminLogin";

class Profile extends React.Component {
  // set states for profile
  state = {
    isVisible: false
  };

  // declare logout function using redux and actions.
  logout = () => {
    const { routeName } = this.props.navigation.state;
    if (routeName === "Profile") {
      console.log(nothing);
    } else {
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    // instanciates variable user as an empty object
    let user = {};
    // declares navigation variable
    const { state, navigate } = this.props.navigation;
    // returning props for the user based on condition
    if (state.routeName === "Profile") {
      user = this.props.profile;
    } else {
      user = this.props.user;
    }
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              paddingTop: 20
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {user.username}
            </Text>
            <Text>{user.bio}</Text>
          </View>
        </View>
        <View style={styles.center}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.buttonSmall}
              // navigate to the edit page
              onPress={() => this.props.navigation.navigate("Edit")}
            >
              <Text style={styles.bold}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSmall}
              //logout function for immediate logout
              onPress={() =>
                firebase
                  .auth()
                  .signOut()
                  .then(this.props.navigation.navigate("Login"))
                  .catch(function(error) {
                    // An error happened.
                  })
              }
            >
              <Text style={styles.bold}>Logout</Text>
            </TouchableOpacity>
            <View>
              <AdminLogin
                OverlayVisible={this.state.isVisible}
                // state changes for showing / removing overlay
                Close={() => this.setState({ isVisible: false })}
              ></AdminLogin>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonSmall}
            // state changes for showing / removing overlay
            onPress={() => this.setState({ isVisible: true })}
          >
            <Text style={styles.bold}>Admin Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ followUser, unfollowUser }, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
