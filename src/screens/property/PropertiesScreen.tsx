import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {colors} from '../../styles/theme';
import {PropertyCard} from '../../components/ui/PropertyCard';
import {AppPage} from '../../components/layout/AppPage';
import {AppScrollView} from '../../components/layout/AppScrollView';
import {AppInput} from '../../components/ui/AppInput';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/types';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const properties = [
  {
    id: '1',
    title: '2BHK Apartment in Jaipur',
    price: '₹35,000/month',
    location: 'Malviya Nagar, Jaipur',
    area: '1250 sq.ft.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYopneXydH1Tj-HVI4vtdHy-PKAw_HOIggg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s',
      'https://media.istockphoto.com/id/2155879397/photo/house-in-a-charming-neighborhood-with-stunning-sidewalk-landscaping.jpg?s=612x612&w=0&k=20&c=nQJOUoNb2RNev3QVNjIohcmxQABCTetCdgfnc8MV8sU=',
    ],
  },
  {
    id: '2',
    title: 'Office Space in Bangalore',
    price: '₹70,000/month',
    location: 'Indiranagar, Bangalore',
    area: '1800 sq.ft.',
    images: [
      'https://i.pinimg.com/736x/f0/fc/17/f0fc17618d45910665e1efb85c1c0a72.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgIl4WvdETEbz66LlAMwVaHd-B-k3LQl4xIOQrryXdcSArg-Icgiug-oYTdMlm3eX9VA&usqp=CAU',
    ],
  },
  {
    id: '3',
    title: '1Room for rent,',
    price: '₹5000/month',
    location: 'Indiranagar, Bangalore',
    area: '1000 sq.ft.',
    images: [
      'https://i.pinimg.com/736x/f0/fc/17/f0fc17618d45910665e1efb85c1c0a72.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgIl4WvdETEbz66LlAMwVaHd-B-k3LQl4xIOQrryXdcSArg-Icgiug-oYTdMlm3eX9VA&usqp=CAU',
    ],
  },
];

const PropertiesScreen = () => {
  const [search, setSearch] = React.useState('');
  const navigation = useNavigation<NavigationProp>();
  return (
    <View>
      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.inputWrapper}>
          <AppInput
            placeholder="Search a property by location"
            value={search}
            onChangeText={setSearch}
            icon={<Icon name="search-outline" size={20} color="#888" />}
          />
        </View>
      </View>
      <Text style={styles.heading}>Available Properties</Text>
      <FlatList
        data={properties}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 6}}
        renderItem={({item}) => (
          <PropertyCard
            id={item.id}
            title={item.title}
            price={item.price}
            location={item.location}
            area={item.area}
            images={item.images}
            onPress={() =>
              navigation.navigate('Main', {
                screen: 'PropertyDetail',
                params: {
                  property: item,
                },
              })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.primary,
  },
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
});

export default PropertiesScreen;
