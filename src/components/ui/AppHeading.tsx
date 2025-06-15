import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';

interface Props {
  children: string;
}

export const AppHeading = ({children}: Props) => (
  <Text style={styles.heading}>{children}</Text>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    marginBottom: 16,
    color: colors.primary,
    textAlign: 'center',
  },
});
