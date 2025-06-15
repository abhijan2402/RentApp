import React from 'react';
import {TextInput, Text, View, StyleSheet, TextInputProps} from 'react-native';

interface AppInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
  icon?: React.ReactNode; 
  rightIcon?: React.ReactNode; 
}

export const AppInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  error,
  icon,
  rightIcon,
  ...rest
}: AppInputProps) => (
  <View style={{marginBottom: 16}}>
    {label && <Text style={styles.label}>{label}</Text>}

    <View style={[styles.inputWrapper, error && styles.errorBorder]}>
      {icon && <View style={styles.icon}>{icon}</View>}

      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        {...rest}
      />

      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>

    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.3,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: '#111',
  },
  icon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 11,
    marginTop: 4,
    marginLeft: 4,
  },
});
