import React from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MovieCard} from '@components';
import {useSelector} from 'react-redux';
import styles from './style';

const FavourtireScreen = props => {
  const {FavouriteList} = useSelector(state => state);

  const getData = () => {
    if (FavouriteList?.length % 2 == 0) {
      return FavouriteList;
    } else {
      return [...FavouriteList, {empty: true}];
    }
  };
  const renderItem = ({item}) =>
    item?.empty ? (
      <MovieCard empty={true} />
    ) : (
      <MovieCard item={item} navigation={props.navigation} />
    );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon name="west" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.favoriteTitle}>
          <Text style={styles.favText}>Favourite List</Text>
        </View>
      </View>
      <View style={styles.flatListView}>
        <FlatList
          data={getData()}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {FavouriteList?.length == 0 && (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>
            You Have not added any movies to favourite list, please add.
          </Text>
        </View>
      )}
    </View>
  );
};

export default FavourtireScreen;
