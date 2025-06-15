import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';

interface Props {
  children: React.ReactNode;
}

export const AppContainer = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
