import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInputBox} from '@components';
import styles from './style';
import {setUIData} from '@redux';
import {useDispatch} from 'react-redux';

const SearchPage = props => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    if (searchText !== '') {
      dispatch(
        setUIData({
          loader: true,
          loadingText: 'Fetching all movies...',
          loadingTextColor: 'black',
        }),
      );
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=b7261832&s=${searchText}&page=1`,
      );
      response = await response.json();
      dispatch(setUIData({loader: false}));

      if (response.Response === 'True') {
        props.navigation.navigate('ListingScreen', {
          movieName: searchText,
          moviesListData: response.Search,
        });
      } else {
        alert(
          `Oops!,\nNo Movies found, please make sure you have entered correct movie name and search again`,
        );
      }
    } else {
      alert('please enter movie name.');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.appNameText}>Movie Buzz</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Search Movies that you want to know more about
        </Text>
        <View style={styles.searchContainer}>
          <TextInputBox
            inputValue={searchText}
            onChangeText={setSearchText}
            inputContainerStyle={styles.inputContainer}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            fetchMovies();
          }}>
          <Text style={styles.buttonText}>search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchPage;
