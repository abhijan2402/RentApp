// src/navigation/MainStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabs from './MainTabs';
import JobDetailScreen from '../screens/jobs/JobDetailScreen';
import PropertyDetailScreen from '../screens/property/PropertyDetailScreen';
import {Job, Property, TabParamList} from '../../types/types';
import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackParamList = {
  Menu: NavigatorScreenParams<TabParamList>;
  JobDetail: {job: Job};
  PropertyDetail: {property: Property};
};
const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Menu" component={MainTabs} />
      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
      <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
    </Stack.Navigator>
  );
}
