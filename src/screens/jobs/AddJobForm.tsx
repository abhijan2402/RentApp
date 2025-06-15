import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {AppInput} from '../../components/ui/AppInput';
import {AppTextArea} from '../../components/ui/AppTextArea';

export default function AddJobForm({onClose}: {onClose: () => void}) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [tags, setTags] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState<string | null>(null);

  const pickLogo = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      res => {
        if (res.assets && res.assets.length > 0) {
          const uri = res.assets[0].uri;
          setLogo(uri || null);
        } else if (res.errorMessage) {
          Alert.alert('Error', res.errorMessage);
        }
      },
    );
  };

  const handleSubmit = () => {
    if (
      !title ||
      !company ||
      !tags ||
      !salary ||
      !location ||
      !description ||
      !logo
    ) {
      Alert.alert('Error', 'Please fill in all fields and select a logo.');
      return;
    }

    const jobData = {
      id: Date.now().toString(),
      title,
      company,
      tags: tags.split(',').map(tag => tag.trim()),
      salary,
      location,
      description,
      logo,
    };

    console.log('Job Submitted:', jobData);
    onClose();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add New Job</Text>

      <AppInput
        label="Job Title"
        placeholder="Enter job title"
        value={title}
        onChangeText={setTitle}
      />

      <AppInput
        label="Company"
        placeholder="Enter company name"
        value={company}
        onChangeText={setCompany}
      />

      <AppInput
        label="Tags"
        placeholder="e.g. Design, Full-Time, Junior"
        value={tags}
        onChangeText={setTags}
      />

      <AppInput
        label="Salary"
        placeholder="e.g. $120,000/year"
        value={salary}
        onChangeText={setSalary}
      />

      <AppInput
        label="Location"
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <AppTextArea
        placeholder="Enter job description"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.logoButton} onPress={pickLogo}>
        <Text style={styles.logoButtonText}>
          {logo ? 'Change Logo' : 'Pick Company Logo'}
        </Text>
      </TouchableOpacity>

      {logo && <Image source={{uri: logo}} style={styles.logoPreview} />}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Job</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoButton: {
    backgroundColor: '#002745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  logoPreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 12,
  },
  submitText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
