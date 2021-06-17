import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {TextInputBox, MovieCard} from '@components';
import CheckBox from 'react-native-check-box';
import {setUIData} from '@redux';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const ListingPage = props => {
  const {movieName, moviesListData} = props?.route?.params;
  const [searchText, setSearchText] = useState(movieName ? movieName : '');
  const [moviesList, setMoviesList] = useState(
    moviesListData ? moviesListData : [],
  );
  const [movieCheckBox, setMovieCheckBox] = useState(false);
  const [seriesCheckBox, setSeriesCheckBox] = useState(false);
  const [episodeCheckBox, setEpisodeCheckBox] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const dispatch = useDispatch();

  const getFilterParam = () => {
    let filterParameter = null;
    if (searchText === '') {
      alert('please enter movie name to search.');
    } else {
      if (movieCheckBox) {
        filterParameter = 'movie';
      } else if (seriesCheckBox) {
        filterParameter = 'series';
      } else if (episodeCheckBox) {
        filterParameter = 'episode';
      } else {
        filterParameter = null;
      }
    }
    return filterParameter;
  };

  const onEndReached = async () => {
    dispatch(
      setUIData({
        loader: true,
        loadingText: 'Fetching more...',
        loadingTextColor: 'black',
      }),
    );
    const type = getFilterParam();
    let response = await fetch(
      `${
        type
          ? `http://www.omdbapi.com/?apikey=b7261832&s=${searchText}&page=${
              pageIndex + 1
            }&type=${type}`
          : `http://www.omdbapi.com/?apikey=b7261832&s=${searchText}&page=${
              pageIndex + 1
            }`
      }`,
    );
    response = await response.json();
    dispatch(setUIData({loader: false}));
    if (response.Response === 'True') {
      if (response.Search.length % 2 == 0) {
        setMoviesList(list => list.concat(response.Search));
      } else {
        let responseData = [...response.Search];
        responseData.push({empty: true});
        setMoviesList(list => list.concat(responseData));
      }
      setPageIndex(val => val + 1);
    } else {
      alert(`no movies found`);
    }
  };

  const fetchMovies = async () => {
    const type = getFilterParam();
    setMoviesList([]);
    dispatch(setUIData({loader: true, loadingText: 'Searching...'}));
    let response = await fetch(
      `${
        type
          ? `http://www.omdbapi.com/?apikey=b7261832&s=${searchText}&page=1&type=${type}`
          : `http://www.omdbapi.com/?apikey=b7261832&s=${searchText}&page=1`
      }`,
    );

    response = await response.json();
    dispatch(setUIData({loader: false}));
    if (response.Response === 'True') {
      setMoviesList(response?.Search);
      setPageIndex(1);
    } else {
      alert('No Movies found.');
    }
  };

  const headerNavigation = navigateTo => {
    if (navigateTo === 'back') {
      props.navigation.goBack();
    }
    if (navigateTo === 'fav') {
      props.navigation.navigate('FavouriteScreen');
    }
  };

  const SearchBox = () => {
    return (
      <View style={styles.searchContianer}>
        <View style={styles.headerContianer}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              headerNavigation('back');
            }}>
            <Icon name="west" size={20} color="black" />
          </TouchableOpacity>
          <View style={styles.appNameContianer}>
            <Text style={styles.appNameText}>Movie Buzz</Text>
          </View>
          <TouchableOpacity
            style={styles.burger}
            onPress={() => {
              headerNavigation('fav');
            }}>
            <MaterialIcon name="hamburger" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBoxContainer}>
          <TextInputBox
            inputValue={searchText}
            onChangeText={setSearchText}
            inputContainerStyle={styles.inputContainer}
          />
        </View>
        <View style={styles.filterContianer}>
          <Text style={styles.sortByText}>Sort By :</Text>
          <CheckBox
            style={styles.checkBox}
            onClick={() => {
              setMovieCheckBox(val => !val);
              setSeriesCheckBox(false);
              setEpisodeCheckBox(false);
            }}
            isChecked={movieCheckBox}
            rightText={'Movies'}
          />
          <CheckBox
            style={styles.checkBox}
            onClick={() => {
              setSeriesCheckBox(val => !val);
              setMovieCheckBox(false);
              setEpisodeCheckBox(false);
            }}
            isChecked={seriesCheckBox}
            rightText={'Series'}
          />
          <CheckBox
            style={styles.checkBox}
            onClick={() => {
              setEpisodeCheckBox(val => !val);
              setMovieCheckBox(false);
              setSeriesCheckBox(false);
            }}
            isChecked={episodeCheckBox}
            rightText={'Episode'}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtnContainer}
          onPress={() => {
            fetchMovies();
          }}>
          <Text style={styles.btnText}>search</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) =>
    item?.empty ? (
      <MovieCard empty={true} />
    ) : (
      <MovieCard item={item} navigation={props.navigation} />
    );

  return (
    <View style={styles.mainContainer}>
      {SearchBox()}
      <View style={styles.flatListView}>
        <FlatList
          data={moviesList}
          renderItem={renderItem}
          numColumns={2}
          onEndReached={() => {
            onEndReached();
          }}
          onEndReachedThreshold={0.7}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {moviesList?.length == 0 && (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>No Movies found</Text>
        </View>
      )}
    </View>
  );
};

export default ListingPage;
