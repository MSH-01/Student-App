import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class SmallTextinput extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.rect2}>
          <TextInput
            placeholder={this.props.placeholder}
            keyboardType={this.props.keyboardtype}
            returnKeyType={this.props.returnkey}
            secureTextEntry={this.props.securetextentry}
            style={styles.textInput2}
            blurOnSubmit={this.props.bluronsubmit}
            textContentType={this.props.textContentType}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    width: 140,
    height: 36,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10
  },
  textInput2: {
    width: 125,
    height: 36,
    color: "#121212",
    marginLeft: 12
  }
});
