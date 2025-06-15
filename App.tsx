import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import SelectUserTypeScreen from './src/screens/SelectUserTypeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import JobDetailScreen from './src/screens/jobs/JobDetailScreen';
import {Job, Property} from './types/types';
import PropertiesScreen from './src/screens/property/PropertiesScreen';
import PropertyDetailScreen from './src/screens/property/PropertyDetailScreen';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  UserType: undefined;
  Profile: undefined;
  Dashboard: undefined;
  Menu: undefined;
  Property: undefined;
  JobDetail: {job: Job};
  PropertyDetail: {property: Property};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="UserType" component={SelectUserTypeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />

        <Stack.Screen
          name="JobDetail"
          component={JobDetailScreen}
          // options={{title: 'Job Details'}}
        />
        <Stack.Screen
          name="PropertyDetail"
          component={PropertyDetailScreen}
          // options={{title: 'Job Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
