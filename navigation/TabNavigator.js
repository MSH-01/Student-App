import React from "react";
import { Text, View } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import {
  HomeNavigator,
  SearchNavigator,
  PostNavigator,
  ActivityNavigator,
  ProfileNavigator,
  TasksNavigator
} from "./StackNavigator";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={focused ? "home" : "home-outline"}
            size={32}
          />
        )
      }
    },
    Tasks: {
      screen: TasksNavigator,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={focused ? "calendar-check" : "calendar-check-outline"}
            size={32}
          />
        )
      }
    },
    MyProfile: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={focused ? "account-circle" : "account-circle-outline"}
            size={32}
          />
        )
      }
    }
  },
  {
    tabBarPosition: "top",
    initialRouteName: "Home",
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        paddingVertical: 10,
        height: 60
      }
    }
  }
);

export default createAppContainer(TabNavigator);
