import React from 'react';
import {AppContainer} from './AppContainer';
import {AppHeader} from './AppHeader';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';


interface Props {
  children: React.ReactNode;
  title: string;
  showBack?: boolean;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const AppPage = ({children, title, showBack}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  const handleHeaderPress = () => {
    if (title === 'JobApp') {
      navigation.navigate('Dashboard');
    }
  };

  return (
    <AppContainer>
      <AppHeader
        title={title}
        showBack={showBack}
        onTitlePress={handleHeaderPress}
      />
      {children}
    </AppContainer>
  );
};
