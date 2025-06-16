import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useAuthStore} from '../../store/useAuthStore';
import {AppInput} from '../../components/ui/AppInput';
import Icon from 'react-native-vector-icons/Ionicons';
import {JobCard} from '../../components/ui/JobCard';
import {colors} from '../../styles/theme';
import {StackNavigationProp} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'JobDetail'>;

export default function JobsList() {
  const userType = useAuthStore(state => state.userType);
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = React.useState('');

  const featuredJobs = [
    {
      id: '1',
      title: 'Product Designer',
      company: 'Google',
      tags: ['Design', 'Full-Time', 'Junior'],
      salary: '$160,000/year',
      location: 'California, USA',
      logo: 'https://logo.clearbit.com/google.com',
      description: ` We're looking for a Product Manager who can drive the strategy, planning, and execution of our product development lifecycle. You’ll work closely with cross-functional teams including engineering, design, marketing, and sales to deliver cutting-edge features and enhancements that delight users.
`,
    },
    {
      id: '2',
      title: 'Frontend Dev',
      company: 'Netflix',
      tags: ['Frontend', 'Remote', 'Mid-Level'],
      salary: '$130,000/year',
      location: 'USA',
      logo: 'https://logo.clearbit.com/netflix.com',
      description: `We’re seeking a skilled Frontend Developer proficient in React.js to build engaging and scalable web applications. You will collaborate closely with designers and backend engineers to create seamless user experiences.`,
    },
  ];

  const recommendedJobs = [
    {
      id: '3',
      title: 'UX Designer',
      company: 'Dribbble',
      salary: '$80,000/y',
      tags: ['Frontend', 'Remote', 'Mid-Level'],
      location: 'USA',
      color: '#fdecef',
      logo: 'https://logo.clearbit.com/dribbble.com',
      description: `We’re seeking a skilled Frontend Developer proficient in React.js to build engaging and scalable web applications. You will collaborate closely with designers and backend engineers to create seamless user experiences.`,
    },
    {
      id: '4',
      title: 'Sr Engineer',
      company: 'Facebook',
      location: 'UAE',
      salary: '$96,000/y',
      color: '#e9f1ff',
      logo: 'https://logo.clearbit.com/facebook.com',
      tags: ['Frontend', 'Remote', 'Mid-Level'],
      description: `We’re seeking a skilled Frontend Developer proficient in React.js to build engaging and scalable web applications. You will collaborate closely with designers and backend engineers to create seamless user experiences.`,
    },
    {
      id: '5',
      title: 'Sr Engineer',
      company: 'Facebook',
      location: 'India',
      salary: '$96,000/y',
      color: '#e9f1ff',
      logo: 'https://logo.clearbit.com/facebook.com',
      tags: ['Frontend', 'Remote', 'Mid-Level'],
      description: `We’re seeking a skilled Frontend Developer proficient in React.js to build engaging and scalable web applications. You will collaborate closely with designers and backend engineers to create seamless user experiences.`,
    },
    {
      id: '6',
      title: 'Sr Engineer',
      company: 'Facebook',
      location: 'Armenia',
      salary: '$96,000/y',
      color: '#e9f1ff',
      logo: 'https://logo.clearbit.com/facebook.com',
      tags: ['Frontend', 'Remote', 'Mid-Level'],
      description: `We’re seeking a skilled Frontend Developer proficient in React.js to build engaging and scalable web applications. You will collaborate closely with designers and backend engineers to create seamless user experiences.`,
    },
  ];

  return (
    <View>
      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.inputWrapper}>
          <AppInput
            placeholder="Search a job or position"
            value={search}
            onChangeText={setSearch}
            icon={<Icon name="search-outline" size={20} color="#888" />}
          />
        </View>
      </View>

      {/* Featured Jobs */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <TouchableOpacity>
            {/* <Text style={styles.link}>See all</Text> */}
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={featuredJobs}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 6}}
          renderItem={({item}) => (
            <View style={{width: 320, marginRight: 10}}>
              <JobCard
                job={item}
                variant="featured"
                onPress={() => navigation.navigate('JobDetail', {job: item})}
              />
            </View>
          )}
          snapToAlignment="start"
          snapToInterval={232}
          decelerationRate="fast"
        />
      </View>

      {/* Recommended Jobs */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended Jobs</Text>
          <TouchableOpacity>
            {/* <Text style={styles.link}>See all</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.recommendedContainer}>
          {recommendedJobs.map(item => (
            <View key={item.id} style={{width: '100%'}}>
              <JobCard
                job={item}
                variant="recommend"
                onPress={() => navigation.navigate('JobDetail', {job: item})}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    marginBottom: 8,
  },

  inputWrapper: {
    flex: 1,
  },

  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
  link: {
    color: colors.primary,
    fontSize: 14,
  },
  recommendedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // To space 2 cards per row
    gap: 12,
  },
});
