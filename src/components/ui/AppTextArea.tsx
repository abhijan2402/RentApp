import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

interface AppTextAreaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
}

export const AppTextArea = ({
  value,
  onChangeText,
  placeholder,
  error,
}: AppTextAreaProps) => (
  <View style={{marginBottom: 10}}>
    <TextInput
      style={[styles.input, error && styles.errorBorder]}
      value={value}
      placeholder={placeholder}
      multiline
      numberOfLines={4}
      onChangeText={onChangeText}
      textAlignVertical="top"
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    minHeight: 100,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 11,
    marginTop: 4,
  },
});
