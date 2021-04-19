import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ImagePicker, Permissions } from "expo";
import { Text, View, TouchableOpacity, Image } from "react-native";
import {
  updatePhoto,
  updateEmail,
  updatePassword,
  updateUsername,
  updateBio,
  signup,
  updateUser
} from "../actions/user";
import { uploadPhoto } from "../actions";
import TextInput from "../components/TextInput";

class Signup extends React.Component {
  // uses the actions from /user to use the states in the function, when submit pressed
  // if the route isnt signup, user is editing data, so updateUser() used.
  onPress = () => {
    const { routeName } = this.props.navigation.state;
    if (routeName === "Signup") {
      this.props.signup();
      this.props.navigation.navigate("Home");
    } else {
      this.props.updateUser();
      this.props.navigation.goBack();
    }
  };

  render() {
    // variable routename given by the navigation state to know journey.
    const { routeName } = this.props.navigation.state;
    return (
      <View style={[styles.container, styles.center]}>
        <TextInput
          style={styles.border}
          // this input data is uneditable if the user's route isnt signup,
          // change of value doesnt update.
          editable={routeName === "Signup" ? true : false}
          value={this.props.user.email}
          // the value is used with function updateEmail()
          onChangeText={input => this.props.updateEmail(input)}
          placeholder="Email"
        />
        <TextInput
          style={styles.border}
          editable={routeName === "Signup" ? true : false}
          value={this.props.user.password}
          onChangeText={input => this.props.updatePassword(input)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.border}
          value={this.props.user.username}
          onChangeText={input => this.props.updateUsername(input)}
          placeholder="Username"
        />
        <TextInput
          style={styles.border}
          value={this.props.user.bio}
          // this input is editable even when route isnt signup, so no condition to editable.
          onChangeText={input => this.props.updateBio(input)}
          placeholder="School"
        />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text
            style={{
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              paddingTop: 9,
              fontWeight: "bold"
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // redux to bind the states given to the actions from /user
  return bindActionCreators(
    {
      updateUser,
      updateEmail,
      updatePassword,
      updateUsername,
      updateBio,
      signup
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
