import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface Props {
  title: string;
  showBack?: boolean;
  onTitlePress?: () => void;
}

export const AppHeader = ({title, showBack = true, onTitlePress}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.header}>
      {showBack ? (
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color={colors.btnText} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.leftPlaceholder} />
      )}

      <TouchableOpacity
        onPress={onTitlePress}
        style={[
          styles.center,
          !showBack && {alignItems: 'flex-start', paddingLeft: 8},
        ]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      <View style={styles.right}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-circle-outline" size={24} color={colors.btnText} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Menu')}
          style={styles.menuIcon}>
          <Icon name="menu" size={24} color={colors.btnText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.header,
    justifyContent: 'space-between',
    color: colors.text,
  },
  left: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftPlaceholder: {
    width: 0,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 60,
    justifyContent: 'flex-end',
  },
  menuIcon: {
    marginLeft: 10,
    color: colors.btnText,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.btnText,
  },
});
