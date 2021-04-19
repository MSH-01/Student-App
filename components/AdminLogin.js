import React, { Component } from "react";
import { Overlay } from "react-native-elements";
import { TouchableOpacity, Text, View, StyleSheet, Alert } from "react-native";
import TextInput from "./TextInput";
import AdminOverlay from "../components/AdminOverlay";

export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null,
      overlayVisible: false
    };
  }

  handleLogin = () => {
    if (this.state.email == "admin@admin.com") {
      console.log("we got him");
      this.setState({ overlayVisible: true });
      this.textInput.clear();
      console.log(this.state.overlayVisible);
    } else {
      console.log("we dont got him");
    }
  };

  closeadmin = () => {
    this.setState({ overlayVisible: false });
    console.log("admin logged out");
  };

  render() {
    return (
      <Overlay isVisible={this.props.OverlayVisible} fullScreen={true}>
        <View style={{ paddingTop: 100 }}>
          <TextInput
            placeholder="Admin Email"
            keyboardtype="email-address"
            autoCompleteType="email"
            returnkey="next"
            autoCapitalize={false}
            style={styles.Input}
            reference={email => {
              this.textInput = email;
            }}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            placeholder="Admin Password"
            autoCompleteType="password"
            securetextentry={true}
            returnkey="next"
            style={styles.Input}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TouchableOpacity onPress={() => this.handleLogin()}>
            <Text style={{ fontSize: 30, fontWeight: "bold", left: "35%" }}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.props.Close}
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 350
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>CLOSE</Text>
        </TouchableOpacity>
        <AdminOverlay
          adminVisible={this.state.overlayVisible}
          Close={() => this.closeadmin()}
        ></AdminOverlay>
      </Overlay>
    );
  }
}
const styles = StyleSheet.create({
  Input: {
    paddingBottom: 10
  }
});
