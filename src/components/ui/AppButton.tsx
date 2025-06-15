import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../styles/theme';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

export const AppButton = ({title, onPress, loading}: AppButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress} disabled={loading}>
    {loading ? (
      <ActivityIndicator color={colors.btnText} />
    ) : (
      <Text style={styles.btnText}>{title}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnText: {
    color: colors.btnText,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
