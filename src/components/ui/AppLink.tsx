import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../styles/theme';

interface Props {
  label: string;
  onPress: () => void;
}

export const AppLink = ({label, onPress}: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.link}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  link: {
    marginTop: 12,
    color: colors.secondary,
    textAlign: 'center',
  },
});
