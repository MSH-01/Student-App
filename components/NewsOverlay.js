import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Modal
} from "react-native";
import { Overlay } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function NewsCard(props) {
  return (
    <Modal
      fullScreen={true}
      visible={props.OverlayVisible}
      animationType="slide"
      presentationStyle="formSheet"
    >
      <View>
        <View
          style={{
            position: "relative",
            alignSelf: "center",
            width: "100%"
          }}
        >
          <Image
            source={require("../assets/27012020.jpg")}
            style={{
              bottom: 10,
              width: 500,
              height: 350,
              alignSelf: "center"
            }}
          />
          <LinearGradient
            colors={["#ffffff", "#ffffff", "#000000"]}
            style={{
              width: 600,
              height: 350,
              bottom: 10,
              position: "absolute",
              opacity: 0.5,
              right: 1
            }}
          >
            <View
              style={{
                position: "absolute"
              }}
            />
          </LinearGradient>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            top: 230,
            fontSize: 40,
            position: "absolute",
            color: "white",
            paddingLeft: 10
          }}
        >
          {props.OverlayTitle}
        </Text>

        <Text
          style={{
            paddingTop: 10,
            top: 210,
            color: "white",
            position: "absolute",
            paddingLeft: 10
          }}
        >
          {props.OverlaySchool}
        </Text>
        <MaterialCommunityIcons
          name="close"
          size={30}
          style={{ paddingLeft: 330, top: 30, position: "absolute" }}
          onPress={props.OverlayClose}
        ></MaterialCommunityIcons>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: 350,
          width: 320,
          alignContent: "center",
          alignSelf: "center"
        }}
      >
        <View style={{ paddingTop: 10 }}>
          <Text style={{ textAlign: "justify", lineHeight: 35 }}>
            {props.OverlayStory}
          </Text>
        </View>
      </ScrollView>
    </Modal>
  );
}

export default NewsCard;
