import React from "react";
import { StyleSheet, Platform, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import index from './screens/index';
import CabEntry from './screens/CabEntry';
import VisitorEntry from "./screens/VisitorEntry";
import VisitorLog from "./screens/VisitorLog";
import plus from "./screens/plus";
import { Colors } from "@/constants/Colors";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

export default function Tabs() {
  const insets = useSafeAreaInsets();
  
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: insets.bottom + 10,
          left: width * 0.05,
          right: width * 0.05,
          backgroundColor: '#ffffff',
          height: 70,
          borderRadius: 15,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          ...styles.tabBarShadow
        }
      }}>
      <Tab.Screen 
        name="Home" 
        component={index} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarInactiveTintColor: '#999999'
        }}
      />
      <Tab.Screen 
        name="Visitor Entry" 
        component={VisitorEntry} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={24} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarInactiveTintColor: '#999999'
        }}
      />
      <Tab.Screen 
        name="Cab Entry" 
        component={CabEntry} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" size={24} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarInactiveTintColor: '#999999'
        }}
      />
      <Tab.Screen 
        name="Visitor Log" 
        component={VisitorLog} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard" size={24} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarInactiveTintColor: '#999999'
        }}
      />
      <Tab.Screen 
        name="More" 
        component={plus} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={24} color={color} />
          ),
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarInactiveTintColor: '#999999'
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    borderTopWidth: 0,
  }
});