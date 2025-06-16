import {NavigatorScreenParams} from '@react-navigation/native';

// ------------------ Models ------------------ //

export type Job = {
  id: string;
  title: string;
  company: string;
  tags?: string[];
  salary: string;
  location: string;
  logo: string;
  description?: string;
  recruiterPhone?: string;
  recruiterName?: string;
};

export type Property = {
  id: string;
  title: string;
  price: string;
  location: string;
  area: string;
  images: string[];
  onPress?: () => void;
};

// ------------------ Tab Navigator ------------------ //

export type TabParamList = {
  Dashboard: undefined;
  Properties: undefined;
  Profile: undefined;
};

// ------------------ Main Stack Navigator ------------------ //

export type MainStackParamList = {
  Menu: NavigatorScreenParams<TabParamList>; // Tab navigator
  JobDetail: {job: Job};
  PropertyDetail: {property: Property};
};

// ------------------ Auth Stack Navigator ------------------ //

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  UserType: undefined;
};

// ------------------ Root Stack Navigator ------------------ //
// OPTIONAL: if you plan to use RootStack to switch between Auth/Main

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainStackParamList>;
};
