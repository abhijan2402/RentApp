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

export default function AddPropertyForm({onClose}: {onClose: () => void}) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const pickImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 5,
      },
      res => {
        if (res.didCancel) return;
        if (res.assets && res.assets.length > 0) {
          if (res.assets.length < 1 || res.assets.length > 5) {
            Alert.alert('Please select between 1 to 5 images.');
            return;
          }

          const selectedUris = res.assets
            .map(asset => asset.uri!)
            .filter(Boolean);
          setImages(selectedUris);
        } else if (res.errorMessage) {
          Alert.alert('Error', res.errorMessage);
        }
      },
    );
  };

  const handleSubmit = () => {
    if (
      !title ||
      !price ||
      !location ||
      !area ||
      !description ||
      images.length === 0
    ) {
      Alert.alert('Error', 'Please fill all fields and select 1–5 images.');
      return;
    }

    const propertyData = {
      id: Date.now().toString(),
      title,
      price,
      location,
      area,
      description,
      images,
    };

    console.log('Property Submitted:', propertyData);
    onClose();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add New Property</Text>

      <AppInput
        label="Title"
        placeholder="Enter property title"
        value={title}
        onChangeText={setTitle}
      />

      <AppInput
        label="Price"
        placeholder="₹35,000/month"
        value={price}
        onChangeText={setPrice}
      />

      <AppInput
        label="Location"
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <AppInput
        label="Area"
        placeholder="e.g. 1250 sq.ft."
        value={area}
        onChangeText={setArea}
      />

      <AppTextArea
        placeholder="Enter property description"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImages}>
        <Text style={styles.imagePickerText}>
          {images.length > 0 ? 'Change Images' : 'Pick Property Images (1–5)'}
        </Text>
      </TouchableOpacity>

      {images.length > 0 && (
        <View style={styles.imagePreviewContainer}>
          {images.map((img, index) => (
            <Image key={index} source={{uri: img}} style={styles.imageThumb} />
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Property</Text>
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
  imagePickerButton: {
    backgroundColor: '#002745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePickerText: {
    color: '#fff',
    fontWeight: '600',
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    gap: 8,
  },
  imageThumb: {
    width: 70,
    height: 70,
    borderRadius: 8,
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
