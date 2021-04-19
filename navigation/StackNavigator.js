import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Login from "../screens/Login";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import Tasks from "../screens/Tasks";
import EditScreen from "../screens/Signup";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity, Image, View } from "react-native";
import { Text, Alert } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import firebase from "firebase";
import { Updates } from "expo";

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Home"
      })
    }
  })
);

export const TasksNavigator = createAppContainer(
  createStackNavigator({
    Tasks: {
      screen: Tasks,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Tasks"
      })
    }
  })
);

export const ProfileNavigator = createAppContainer(
  createStackNavigator({
    MyProfile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: "My Profile",
        headerLeft: (
          <TouchableOpacity
            onPress={() =>
              firebase
                .auth()
                .signOut()
                .then(Updates.reload())
                .catch(function(error) {})
            }
          >
            <MaterialCommunityIcons
              style={{ paddingBottom: 3, left: 10 }}
              name={"logout"}
              size={20}
            />
          </TouchableOpacity>
        )
      })
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Edit Profile",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={{ paddingLeft: 10 }}
              name={"ios-arrow-back"}
              size={25}
            />
          </TouchableOpacity>
        )
      })
    }
  })
);
