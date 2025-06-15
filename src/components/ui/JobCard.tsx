import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../styles/theme';
import Icon from 'react-native-vector-icons/Ionicons';

interface JobCardProps {
  job: {
    title: string;
    company: string;
    salary: string;
    logo: string;
    tags?: string[];
    location?: string;
  };
  onPress?: () => void;
  variant?: string;
}

export const JobCard = ({job, onPress}: JobCardProps) => {
  const {title, company, salary, logo, tags = [], location = ''} = job;
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Image source={{uri: logo}} style={styles.logo} />
        {/* <TouchableOpacity>
          <Icon name="bookmark-outline" size={20} color="#fff" />
        </TouchableOpacity> */}
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>

      <View style={styles.tags}>
        {tags.map(tag => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    // width: 180,
    height: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 12,
  },
  company: {
    fontSize: 13,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    color: '#fff',
    fontSize: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salary: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  location: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.9,
  },
});
