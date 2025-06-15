import React, {useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

interface Props {
  images: string[];
}

export const AppSlider = ({images}: Props) => {
  const flatListRef = useRef<FlatList<any>>(null);
  const currentIndex = useRef(0);

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index, animated: true});
      currentIndex.current = index;
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex.current + 1) % images.length;
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex.current - 1 + images.length) % images.length;
    scrollToIndex(prevIndex);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
        keyExtractor={(_, i) => i.toString()}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePrev}>
          <Ionicons name="chevron-back" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Ionicons name="chevron-forward" size={28} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 200,
    resizeMode: 'cover',
  },
  controls: {
    position: 'absolute',
    top: '45%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
});
