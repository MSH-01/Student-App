import React from "react";
import firebase from "firebase";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TextInput from "../components/TextInput";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { updateEmail, updatePassword, login, getUser } from "../actions/user";

class Login extends React.Component {
  // functions to occur on start
  componentDidMount = () => {
    // firebase function to check if user exists, calls login from /user
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.getUser(user.uid, "LOGIN");
        if (this.props.user != null) {
          this.props.navigation.navigate("Home");
        }
      }
    });
  };

  render() {
    return (
      <View style={[styles.container, styles.center]}>
        <View style={styles.container}>
          <View style={styles.textStack}>
            <Text style={styles.text}>Login</Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="419.92"
              height="331.136"
              viewBox="0 0 419.92 331.136"
              style={styles.loginpath}
            >
              <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="420" y2="300">
                  <Stop offset="0" stopColor="#7F7FD5" stopOpacity="1" />
                  <Stop offset="0.5" stopColor="#06A8E7" stopOpacity="1" />
                  <Stop offset="1" stopColor="#91EAE4" stopOpacity="1" />
                </LinearGradient>
              </Defs>
              <Path
                id="Path_15"
                data-name="Path 15"
                fill="url(#grad)"
                d="M7090-4944.167v317.676s42.9-59.228,114.914-64.612,164.9,65.285,259.122,31.633,14.134-298.157,14.134-298.157C7475.477-4956.954,7090-4944.167,7090-4944.167Z"
                transform="translate(-7090 4957.627)"
              />
            </Svg>
          </View>
        </View>
        <View style={styles.inputs}>
          <TextInput
            keyboardtype="email-address"
            //sets the keyboard return to equal next.
            returnkey="next"
            style={styles.textinputcomponent2}
            // value of the input is set to equal the state
            value={this.props.user.email}
            // whenever the text is changed ,the state is uodated
            onChangeText={input => this.props.updateEmail(input)}
            // default text in the input box
            placeholder="Email"
          />
          <TextInput
            securetextentry={true}
            returnkey="done"
            style={styles.textinputcomponent}
            value={this.props.user.password}
            onChangeText={input => this.props.updatePassword(input)}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.group}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.login()}
          >
            <Text style={styles.text3}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.information}>Don't have an account?</Text>
        <View style={styles.button2}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { updateEmail, updatePassword, login, getUser },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const styles = StyleSheet.create({
  signup: {
    color: "#0A84FF",
    top: 10
  },
  inputs: {
    bottom: 60
  },
  information: {
    alignItems: "center",
    alignSelf: "center",
    bottom: 50
  },
  container: {
    flex: 1
  },

  errorMessage: {
    top: 300
  },
  error: {
    color: "red"
  },
  loginpath: {
    top: 100,
    left: 20
  },

  text: {
    top: 525,
    left: 70,
    color: "#121212",
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold"
  },

  path2: {
    top: 0,
    left: 0,
    width: 467,
    height: 542,
    position: "absolute"
  },
  textStack: {
    width: 467,
    height: 582,
    marginTop: -208,
    marginLeft: -27
  },
  textinputcomponent2: {
    width: 283,
    height: 36,
    left: 45,
    bottom: 200
  },
  textinputcomponent: {
    width: 283,
    height: 36,
    left: 45,
    bottom: 175
  },
  group: {
    width: 140,
    height: 36,
    left: 115,
    bottom: 180
  },
  button: {
    width: 140,
    height: 36,
    backgroundColor: "#91EAE4",
    borderRadius: 10
  },
  text3: {
    color: "#121212",
    fontSize: 18,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 6,
    fontWeight: "bold"
  },
  text4: {
    top: 150,
    left: "50%",
    width: 150,
    marginRight: 150,
    height: 20,
    color: "rgba(144,19,254,1)",
    fontSize: 11
  },
  button2: {
    top: 380,
    left: 80,
    width: 150,
    height: 20,
    position: "absolute",
    color: "#0A84FF"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
