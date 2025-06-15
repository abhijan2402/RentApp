import React from 'react';
import {ScrollView, StyleSheet, ScrollViewProps, ViewStyle} from 'react-native';

interface Props extends ScrollViewProps {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
}

export const AppScrollView = ({
  children,
  contentContainerStyle,
  ...props
}: Props) => {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={[styles.content, contentContainerStyle]}
      keyboardShouldPersistTaps="handled"
      {...props}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    // backgroundColor: '#fff', 
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
});
