import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';

interface Props {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const AppTabs = ({tabs, activeTab, onTabChange}: Props) => (
  <View style={styles.container}>
    {tabs.map(tab => (
      <TouchableOpacity
        key={tab}
        style={[styles.tab, activeTab === tab && styles.activeTab]}
        onPress={() => onTabChange(tab)}>
        <Text style={[styles.tabText, activeTab === tab && styles.activeText]}>
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 12,
    gap:10
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    color: '#444',
    fontSize: 16,
  },
  activeText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
