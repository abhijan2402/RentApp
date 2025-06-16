import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';

export const AppContainer = ({children}: {children: React.ReactNode}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
