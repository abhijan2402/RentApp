import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {AppPage} from '../components/layout/AppPage';
import {AppScrollView} from '../components/layout/AppScrollView';
import JobsList from './jobs/JobsList';

import {colors} from '../styles/theme';

export default function JobsScreen() {
  return (
    <AppPage title="HireHaven" showBack={true} showProfileIcon={true}>
      <AppScrollView contentContainerStyle={styles.container}>
        <JobsList />
      </AppScrollView>
    </AppPage>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
});
