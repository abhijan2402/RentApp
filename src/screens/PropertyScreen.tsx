import React from 'react';
import {StyleSheet} from 'react-native';
import {AppPage} from '../components/layout/AppPage';
import {AppScrollView} from '../components/layout/AppScrollView';

import PropertiesScreen from './property/PropertiesScreen';

export default function PropertyScreen() {
  return (
    <AppPage title="HireHaven" showBack={true} showProfileIcon={true}>
      <AppScrollView contentContainerStyle={styles.container}>
        <PropertiesScreen />
      </AppScrollView>
    </AppPage>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
});
