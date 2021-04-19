import React, { Component } from "react";
import { Overlay } from "react-native-elements";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView
} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default class AdminOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null
    };
  }

  handleLogin = () => {
    if (this.state.email == "admin@admin.com") {
      console.log("we got him");
    } else {
      console.log("we dont got him");
    }
  };

  render() {
    return (
      <Overlay isVisible={this.props.adminVisible} fullScreen={true}>
        <View style={styles.container}>
          <View style={styles.textStack}>
            <Text style={styles.text}>Admin Home</Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="419.92"
              height="331.136"
              viewBox="0 0 419.92 331.136"
              style={styles.loginpath}
            >
              <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="420" y2="300">
                  <Stop offset="0" stopColor="#93291E" stopOpacity="1" />
                  <Stop offset="1" stopColor="#ED213A" stopOpacity="1" />
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
            <ScrollView>
              <View style={{ paddingTop: 200, paddingLeft: 50 }}>
                <Text> 2nd one</Text>
                <TouchableOpacity onPress={this.props.Close}>
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    CLOSE
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Overlay>
    );
  }
}
const styles = StyleSheet.create({
  Input: {
    paddingBottom: 10
  },
  container: {
    flex: 1
  },
  loginpath: {
    top: 100,
    left: 10
  },
  text: {
    top: 450,
    left: 50,
    color: "#121212",
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold"
  },
  textStack: {
    width: 467,
    height: 582,
    marginTop: -208,
    marginLeft: -27
  }
});
