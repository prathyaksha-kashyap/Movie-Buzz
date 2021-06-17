import React from 'react';
import {TouchableOpacity, ImageBackground, View, Text} from 'react-native';
import styles from './style';

const MovieCard = props => {
  const {item, empty, navigation} = props;

  const navigateTo = () => {
    navigation.navigate('DetailScreen', {imdbId: item?.imdbID});
  };
  return empty ? (
    <View style={styles.emptyBox}></View>
  ) : (
    <TouchableOpacity
      style={styles.movieBox}
      onPress={() => {
        navigateTo();
      }}>
      <View style={styles.imgView}>
        {item?.Poster !== 'N/A' ? (
          <ImageBackground
            source={{
              uri: item?.Poster,
            }}
            style={styles.imgBgStyle}
          />
        ) : (
          <View style={styles.empmtyPoster}>
            <Text style={styles.movieBuzz}>Movie Buzz</Text>
            <Text style={styles.emptyText}>no poster available</Text>
          </View>
        )}
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Title : {item?.Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
