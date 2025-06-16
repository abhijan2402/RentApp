import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../styles/theme';
import {Property, RootStackParamList} from '../../../types/types';

const {width} = Dimensions.get('window');

type NavigationProp = StackNavigationProp<RootStackParamList, 'PropertyDetail'>;

export const PropertyCard: React.FC<Property> = props => {
  const navigation = useNavigation<NavigationProp>();
  const {images, title, price, location, area} = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (width - 32));
    setActiveIndex(index);
  };

  const navigateToDetail = () => {
    navigation.navigate('PropertyDetail', {property: props});
  };

  return (
    <TouchableOpacity onPress={navigateToDetail} activeOpacity={0.9}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <FlatList
            horizontal
            pagingEnabled
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Image source={{uri: item}} style={styles.image} />
            )}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />
          <View style={styles.imageCount}>
            <Text style={styles.imageCountText}>
              {activeIndex + 1} / {images.length}
            </Text>
          </View>
          <View style={styles.dotsContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, activeIndex === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>

        <View style={styles.detailContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>💰 {price}</Text>
            <Text style={styles.text}>📍 {location}</Text>
            <Text style={styles.text}>📐 {area}</Text>
          </View>
          <TouchableOpacity style={styles.callBtn}>
            <Icon name="call-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width - 32,
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    marginEnd: 8,
  },
});
