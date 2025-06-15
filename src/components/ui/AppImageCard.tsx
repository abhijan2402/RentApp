import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

interface Props {
  image: string;
  title: string;
  description?: string;
}

export const AppImageCard = ({image, title, description}: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.desc}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  desc: {
    fontSize: 14,
    marginHorizontal: 8,
    marginBottom: 8,
    color: '#555',
  },
});
