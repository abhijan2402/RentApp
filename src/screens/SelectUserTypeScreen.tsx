import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {useAuthStore} from '../store/useAuthStore';
import {colors} from '../styles/theme';
import {AppPage} from '../components/layout/AppPage';
import {AppScrollView} from '../components/layout/AppScrollView';
import {AppRadioGroup} from '../components/ui/AppRadioGroup';

type NavigationProp = StackNavigationProp<RootStackParamList, 'UserType'>;

const options = [
  {
    label: 'Looking for Job',
    value: 'Looking for Job',
    icon: 'briefcase-outline',
  },
  {
    label: 'Job Provider',
    value: 'Job Provider',
    icon: 'person-add-outline',
  },
  {
    label: 'Looking for Rent Space',
    value: 'Looking for Rent Space',
    icon: 'home-outline',
  },
  {
    label: 'Providing Rent Space',
    value: 'Providing Rent Space',
    icon: 'home-sharp',
  },
];

export default function SelectUserTypeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const login = useAuthStore(state => state.login);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (value: string) => {
    setSelected(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value],
    );
  };

  const handleSave = () => {
    if (selected.length > 0) {
      login(selected.join(', '));
      console.log('User selected type:', selected);
      navigation.navigate('Dashboard');
    }
  };

  return (
    <AppPage title="HireHaven" showBack={false}>
      <AppScrollView>
        <Text style={styles.title}>What type of user are you?</Text>

        <AppRadioGroup
          options={options}
          selected={selected}
          onSelect={toggleSelect}
        />

        <TouchableOpacity
          style={[styles.saveButton, selected.length === 0 && styles.disabled]}
          onPress={handleSave}
          disabled={selected.length === 0}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </AppScrollView>
    </AppPage>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20,
    color: colors.primary,
  },
  saveButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  disabled: {
    opacity: 0.5,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
