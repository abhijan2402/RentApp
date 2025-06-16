import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {colors} from '../../styles/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppPage} from '../../components/layout/AppPage';
import {AppScrollView} from '../../components/layout/AppScrollView';

type JobDetailRouteParams = {
  JobDetail: {
    job: {
      id: string;
      title: string;
      company: string;
      tags?: string[];
      salary: string;
      location: string;
      logo: string;
      description?: string;
      recruiterPhone?: string;
      recruiterName?: string;
    };
  };
};

export default function JobDetailScreen() {
  const route = useRoute<RouteProp<JobDetailRouteParams, 'JobDetail'>>();
  const {job} = route.params;

  return (
    <AppPage title="HireHaven" showBack={true} showProfileIcon={true}>
      <AppScrollView contentContainerStyle={styles.container}>
        {/* Company Logo & Info */}
        <View style={styles.header}>
          <Image source={{uri: job.logo}} style={styles.logo} />
          <View>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.company}>{job.company}</Text>
          </View>
        </View>

        {/* Salary & Location */}
        <View style={styles.infoRow}>
          <Icon name="cash-outline" size={20} color={colors.primary} />
          <Text style={styles.infoText}>{job.salary}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="location-outline" size={20} color={colors.primary} />
          <Text style={styles.infoText}>{job.location}</Text>
        </View>

        {/* Tags */}
        {job.tags && (
          <View style={styles.tagsContainer}>
            {job.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Description */}
        <Text style={styles.sectionTitle}>Job Description</Text>
        <Text style={styles.description}>
          {job.description || 'No description provided for this role.'}
        </Text>

        {/* Recruiter Info */}
        <Text style={styles.sectionTitle}>Recruiter Info</Text>
        <View style={styles.recruiterBox}>
          <Icon name="person-circle-outline" size={24} color={colors.primary} />
          <Text style={styles.recruiterText}>
            {job.recruiterName || 'John Doe'} -{' '}
            {job.recruiterPhone || '+91 9876543210'}
          </Text>
        </View>

        {/* Call Button */}
        <TouchableOpacity style={styles.callBtn}>
          <Icon name="call-outline" size={20} color="#fff" />
          <Text style={styles.callText}>Call Recruiter</Text>
        </TouchableOpacity>
      </AppScrollView>
    </AppPage>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  company: {
    fontSize: 16,
    color: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#333',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
  },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    fontSize: 13,
    color: '#444',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
    color: colors.primary,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  recruiterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  recruiterText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#333',
  },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  callText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});
