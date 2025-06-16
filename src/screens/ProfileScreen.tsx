import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useAuthStore} from '../store/useAuthStore'; // Replace with actual path
import {colors} from '../styles/theme';
import {AppTabs} from '../components/ui/AppTabs';
import {AppPage} from '../components/layout/AppPage';
import {AppScrollView} from '../components/layout/AppScrollView';
import Icon from 'react-native-vector-icons/Ionicons';

const dummyProfile = {
  name: 'Daljeet Singh',
  email: 'daljeet@example.com',
  phone: '+91 9876543210',
  country: 'India',
  state: 'Rajasthan',
  city: 'Jaipur',
  pincode: '302001',
  address: '123, Nehru Nagar, Tonk Road',
  image: 'https://i.pravatar.cc/150',
};

const dummyData: any = {
  'Jobs Posted': [
    {id: '1', title: 'Frontend Developer', company: 'Tech Soft'},
    {id: '2', title: 'Project Manager', company: 'BizWorks'},
  ],
  'Jobs Applied': [
    {id: '3', title: 'React Native Dev', company: 'CodeCrush'},
    {id: '4', title: 'QA Tester', company: 'SoftEdge'},
  ],
  'Property Posted': [
    {id: '5', title: '2BHK Flat', company: 'HappyHomes'},
    {id: '6', title: 'Office Space', company: 'BuildCorp'},
  ],
  'Property Applied': [
    {id: '7', title: 'Studio Apartment', company: 'UrbanSpaces'},
  ],
};

const ProfileScreen = () => {
  const userType = useAuthStore(state => state.userType);

  // Determine which tabs to show
  const jobTabs = ['Jobs Posted', 'Jobs Applied'];
  const propertyTabs = ['Property Posted', 'Property Applied'];

  let tabs: string[] = [];
  if (userType?.includes('Job')) tabs = [...tabs, ...jobTabs];
  if (userType?.includes('Rent')) tabs = [...tabs, ...propertyTabs];

  // Remove duplicates
  tabs = [...new Set(tabs)];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <AppPage title="HireHevan" showBack={true}>
      <AppScrollView>
        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image source={{uri: dummyProfile.image}} style={styles.avatar} />
          <Text style={styles.name}>{dummyProfile.name}</Text>
          <Text style={styles.subText}>{dummyProfile.email}</Text>
          <Text style={styles.subText}>{dummyProfile.phone}</Text>
        </View>

        {/* <View style={styles.detailBox}>
          <Text style={styles.detail}>
            <Text style={styles.label}>Country:</Text> {dummyProfile.country}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>State:</Text> {dummyProfile.state}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>City:</Text> {dummyProfile.city}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Pincode:</Text> {dummyProfile.pincode}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Address:</Text> {dummyProfile.address}
          </Text>
        </View> */}

        {/* Tabs */}
        <AppTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        <FlatList
          data={dummyData[activeTab] || []}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardCompany}>{item.company}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>No data found.</Text>}
          scrollEnabled={false}
        />
        <View style={styles.logoutWrapper}>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => useAuthStore.getState().logout()}>
            <Icon name="power-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </AppScrollView>
    </AppPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  detailBox: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 1},
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  detail: {
    marginBottom: 6,
    fontSize: 14,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  cardCompany: {
    fontSize: 14,
    color: '#666',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  logoutWrapper: {
    position: 'absolute',
    top: 18,
    right: 16,
    zIndex: 10,
  },
  logoutBtn: {
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    elevation: 4,
  },
});

export default ProfileScreen;
