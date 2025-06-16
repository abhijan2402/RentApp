// src/navigation/MainTabs.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PropertiesScreen from '../screens/property/PropertiesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import PropertyScreen from '../screens/PropertyScreen';
import JobsScreen from '../screens/JobsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName = 'home-outline';
          if (route.name === 'Dashboard') iconName = 'home-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          else if (route.name === 'Jobs') iconName = 'briefcase-outline';
          else if (route.name === 'Properties') iconName = 'business-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Properties" component={PropertyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
