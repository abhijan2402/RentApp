import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useAuthStore} from '../store/useAuthStore';
import {AppPage} from '../components/layout/AppPage';
import {AppScrollView} from '../components/layout/AppScrollView';
import {AppTabs} from '../components/ui/AppTabs';
import JobsList from './jobs/JobsList';
import {StackNavigationProp} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';
import PropertiesScreen from './property/PropertiesScreen';
import AddPropertyForm from './property/AddPropertyForm';
import AddJobForm from './jobs/AddJobForm';
import {colors} from '../styles/theme';

import { RootStackParamList } from '../../types/types';

type NavigationProp = StackNavigationProp<RootStackParamList>;
export default function DashboardScreen() {
  const userType = useAuthStore(state => state.userType);
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState('Jobs');
  const [modalVisible, setModalVisible] = useState(false);

  const tabs = ['Jobs', 'Properties'];

  const handleAddPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <AppPage title="HireHaven" showBack={false} showProfileIcon={true}>
      <AppScrollView contentContainerStyle={styles.container}>
        {/* Greeting */}
        <View style={styles.header}>
          <View>
            <Text style={styles.subText}>Welcome Back! 👋</Text>
            <Text style={styles.username}>John Lucas</Text>
          </View>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={{uri: 'https://i.pravatar.cc/100'}}
              style={styles.profile}
            />
          </TouchableOpacity> */}
          {/* Add Button */}
          <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
            <Text style={styles.addButtonText}>
              {activeTab === 'Jobs' ? '+ Add Job' : '+ Add Property'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <AppTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        {/* Content based on tab */}
        <View style={{marginTop: 10}}>
          {activeTab === 'Jobs' && <JobsList />}
          {activeTab === 'Properties' && <PropertiesScreen />}
        </View>

        {/* Modal */}
        <Modal visible={modalVisible} animationType="slide" transparent>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeBtn} onPress={closeModal}>
                <Text style={{fontWeight: 'bold'}}>✕</Text>
              </TouchableOpacity>
              {activeTab === 'Jobs' ? (
                <AddJobForm onClose={closeModal} />
              ) : (
                <AddPropertyForm onClose={closeModal} />
              )}
            </View>
          </View>
        </Modal>
      </AppScrollView>
    </AppPage>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  subText: {
    color: '#888',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: colors.header,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 4,
    elevation: 4,
  },
  addButtonText: {
    color: colors.btnText,
    fontSize: 12,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  closeBtn: {
    alignSelf: 'flex-end',
  },
});
