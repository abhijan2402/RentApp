import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../styles/theme';

interface JobCardProps {
  job: {
    title: string;
    company: string;
    salary: string;
    logo: string;
    tags?: string[];
    location?: string;
    description?: string;
  };
  onPress?: () => void;
  variant?: 'recommend' | 'featured';
}

export const JobCard = ({job, onPress, variant = 'featured'}: JobCardProps) => {
  const {
    title,
    company,
    salary,
    logo,
    tags = [],
    location = '',
    description = '',
  } = job;

  const isRecommend = variant === 'recommend';

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {/* Logo + Title + Company Row */}
      <View style={styles.topRow}>
        <View style={styles.textContent}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.company} numberOfLines={1}>
            {company}
          </Text>
        </View>
        <Image source={{uri: logo}} style={styles.logo} />
      </View>

      {/* Description */}
      {/* {!isRecommend && !!description && (
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      )} */}
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>

      {/* Tags */}
      {/* {!isRecommend && tags.length > 0 && (
        <View style={styles.tags}>
          {tags.map(tag => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      )} */}
      <View style={styles.tags}>
        {tags.map(tag => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.salary}>{salary}</Text>
        {/* {!isRecommend && <Text style={styles.location}>{location}</Text>} */}
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
    height: 200,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  company: {
    fontSize: 13,
    color: '#fff',
    opacity: 0.9,
  },
  description: {
    color: '#fff',
    marginTop: 12,
    fontSize: 12,
    opacity: 0.9,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 14,
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
