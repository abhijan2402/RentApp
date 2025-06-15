import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const AppSafeArea = ({children}: Props) => {
  return <SafeAreaView style={styles.safe}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});
