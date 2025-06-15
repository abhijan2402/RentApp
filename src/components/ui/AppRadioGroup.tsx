import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure it's installed

interface RadioOption {
  label: string;
  value: string;
  icon?: string; // optional icon name
}

interface Props {
  options: RadioOption[];
  selected: string[];
  onSelect: (value: string) => void;
}

export const AppRadioGroup = ({options, selected, onSelect}: Props) => (
  <View style={styles.container}>
    {options.map(option => {
      const isSelected = selected.includes(option.value);
      return (
        <TouchableOpacity
          key={option.value}
          style={[styles.card, isSelected && styles.selectedCard]}
          onPress={() => onSelect(option.value)}>
          <View style={styles.row}>
            {option.icon && (
              <Icon
                name={option.icon}
                size={22}
                color={isSelected ? colors.primary : '#999'}
                style={{marginRight: 10}}
              />
            )}
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {option.label}
            </Text>
          </View>
          {isSelected ? (
            <Icon name="checkmark-circle" size={22} color={colors.primary} />
          ) : (
            <Icon name="ellipse-outline" size={22} color="#ccc" />
          )}
        </TouchableOpacity>
      );
    })}
  </View>
);


const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: '#f5faff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  labelSelected: {
    fontWeight: 'bold',
    color: colors.primary,
  },
});
