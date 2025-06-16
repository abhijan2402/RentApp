import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Linking,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {AppPage} from '../../components/layout/AppPage';
import {AppScrollView} from '../../components/layout/AppScrollView';
import {MainStackParamList, RootStackParamList} from '../../../types/types';

const {width} = Dimensions.get('window');

type PropertyDetailRouteProp = RouteProp<MainStackParamList, 'PropertyDetail'>;

const PropertyDetailScreen = () => {
  const {params} = useRoute<PropertyDetailRouteProp>();
  const {property} = params;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (width - 32));
    setActiveIndex(index);
  };

  const handleCall = () => {
    Linking.openURL('tel:9876543210'); // Replace with dynamic number if available
  };

  return (
    <AppPage title="HireHevan" showBack={true} showProfileIcon={true}>
      <AppScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.imageContainer}>
            <FlatList
              horizontal
              pagingEnabled
              data={property.images}
              renderItem={({item}) => (
                <Image source={{uri: item}} style={styles.image} />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            />
            <View style={styles.imageCount}>
              <Text style={styles.imageCountText}>
                {activeIndex + 1} / {property.images.length}
              </Text>
            </View>
            <View style={styles.dotsContainer}>
              {property.images.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    activeIndex === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          </View>

          <View style={styles.details}>
            <Text style={styles.text}>💰 {property.price}</Text>
            <Text style={styles.text}>📍 {property.location}</Text>
            <Text style={styles.text}>📐 {property.area}</Text>

            <Text style={styles.description}>
              This beautiful property is available for rent. Spacious and
              well-located, perfect for family or office use.
            </Text>

            <TouchableOpacity style={styles.callButton} onPress={handleCall}>
              <Text style={styles.callText}>📞 Call Owner</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AppScrollView>
    </AppPage>
  );
};

export default PropertyDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: Dimensions.get('window').width - 32,
    height: 220,
    borderRadius: 12, // 👈 This adds rounded corners
    marginRight: 10,
  },
  details: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    color: '#555',
  },
  callButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  callText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  imageContainer: {
    position: 'relative',
  },

  imageCount: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  imageCountText: {
    color: '#fff',
    fontSize: 12,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
});
