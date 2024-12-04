import React from "react";
import { StyleSheet,View,Text,TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons
import index from './screens/index'
import CabEntry from './screens/CabEntry'
import VisitorEntry from "./screens/VisitorEntry";
import VisitorLog from "./screens/VisitorLog";
import plus from "./screens/plus";
import { Colors } from "@/constants/Colors";

const Tab=createBottomTabNavigator();

const Tabs = () => {
  return (
      <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute', 
          bottom:25,
          left:50,
          right:50,
          backgroundColor: '#ffffff',
          height: 90,
          borderRadius:15,
          ...styles.tabBarShadow
        }
        //,
       // tabBarActiveTintColor: '#0000ff', 
        //tabBarInactiveTintColor: '#888888',
      }}>
        <Tab.Screen 
        name="Home" 
        component={index} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} /> // Icon for Home
          ),
          tabBarActiveTintColor:Colors.PRIMARY
        }}></Tab.Screen>
        <Tab.Screen name="Visitor Entry" component={VisitorEntry} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={size} color={color} /> // Icon for Visitor Entry
          ),
          tabBarActiveTintColor:Colors.PRIMARY
        }}
></Tab.Screen>
        <Tab.Screen name="Cab Entry" component={CabEntry} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" size={size} color={color} /> // Icon for Cab Entry
          ),
          tabBarActiveTintColor:Colors.PRIMARY
        }}></Tab.Screen>
        <Tab.Screen name="Visitor Log" component={VisitorLog} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard" size={size} color={color} /> // Icon for Visitor Log
          ),
          tabBarActiveTintColor:Colors.PRIMARY
        }}></Tab.Screen>
        <Tab.Screen name="More" component={plus} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} /> // Icon for Plus button
          ),
          tabBarActiveTintColor:Colors.PRIMARY
        }} ></Tab.Screen>

      </Tab.Navigator>
  )

}

const styles = StyleSheet.create({
  tabBarShadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // This is for Android
  },
  plusTabBarStyle: {
    position: 'absolute',
    bottom: 25,
    left: '10%',
    marginLeft: -30, // To center it horizontally
  },
});
export default Tabs;