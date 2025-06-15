import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  placeholder: string;
  items: {label: string; value: string}[];
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
}

export const AppDropdown = ({
  placeholder,
  items,
  value,
  onValueChange,
  error,
}: Props) => (
  <View style={styles.container}>
    <RNPickerSelect
      onValueChange={onValueChange}
      items={items}
      value={value}
      placeholder={{label: placeholder, value: ''}}
      style={{
        inputIOS: styles.input,
        inputAndroid: styles.input,
      }}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
  },
  error: {
    color: 'red',
    fontSize: 11,
    marginTop: 4,
  },
});
