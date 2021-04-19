import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class Textinput extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            alignContent: "center"
          }}
        >
          <View style={styles.rect2}>
            <TextInput
              ref={this.props.reference}
              placeholder={this.props.placeholder}
              keyboardType={this.props.keyboardtype}
              autoCompleteType={this.props.autoCompleteType}
              returnKeyType={this.props.returnkey}
              secureTextEntry={this.props.securetextentry}
              style={styles.textInput2}
              blurOnSubmit={this.props.bluronsubmit}
              textContentType={this.props.textContentType}
              onChangeText={this.props.onChangeText}
              autoCapitalize={this.props.autoCapitalize}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    width: 280,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10
  },
  textInput2: {
    width: 270,
    height: 40,
    color: "#121212",
    marginLeft: 10
  }
});
