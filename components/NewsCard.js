import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import ReadButtom from "./ReadButton";

function NewsCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Image
          source={require("../assets/27012020.jpg")}
          style={styles.backgroundImage}
        />
        <Svg viewBox="0 0 1349 336" style={styles.path}>
          <Path
            strokeWidth={1}
            fill="rgba(230, 230, 230,1)"
            stroke="rgba(230, 230, 230,1)"
            d="M0.00 0.00 L1.17 235.71 C1.17 235.71 20.97 335.20 102.35 335.00 C179.33 335.00 1239.03 336.00 1239.03 336.00 C1239.03 336.00 1345.00 314.10 1347.00 235.46 C1349.00 156.81 1349.00 156.81 1349.00 156.81 L1348.79 1.38 L0.00 0.00 Z"
          />
        </Svg>
        <Text style={styles.titleTop}>{props.newsSchool}</Text>
        <Text style={styles.headerTop}>{props.newsTitle}</Text>
        <Text style={styles.description}>Read the latest from your school</Text>
        <ReadButtom route={props.newsRoute} style={styles.readButtom} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 350
  },
  backgroundImage: {
    bottom: 350,
    width: 300,
    height: 400,
    borderRadius: 28
  },
  rect: {
    width: 300,
    height: 400,
    borderRadius: 28,
    alignSelf: "center"
  },
  titleBottom: {
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    marginLeft: 22,
    position: "absolute",
    top: -100
  },
  headerBottom: {
    color: "black",
    fontSize: 30,
    marginLeft: 21,
    fontWeight: "bold",
    position: "absolute",
    top: -80
  },
  titleTop: {
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    marginLeft: 22,
    position: "absolute",
    top: -330
  },
  headerTop: {
    color: "white",
    fontSize: 30,
    marginLeft: 21,
    fontWeight: "bold",
    position: "absolute",
    top: -320
  },
  path: {
    width: 300,
    height: 77,
    position: "absolute"
  },
  description: {
    top: 20,
    left: 23,
    color: "rgba(0,0,0,0.3)",
    position: "absolute",
    fontSize: 14,
    width: 200
  },
  readButtom: {
    top: 27,
    left: 228,
    width: 62,
    height: 24,
    position: "absolute"
  }
});

export default NewsCard;
