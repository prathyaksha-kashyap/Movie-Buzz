import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {setUIData, addToFav, removeFav} from '@redux';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';

const MovieDetailScreen = props => {
  const {FavouriteList} = useSelector(state => state);
  const dispatch = useDispatch();
  const {imdbId} = props?.route?.params;
  const [movieData, setMovieData] = useState({});
  const [liked, setLiked] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, [imdbId]);

  useEffect(() => {
    let fav = FavouriteList?.find(fav => {
      return fav.imdbID === imdbId;
    });
    if (fav !== undefined) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);

  const addFavList = () => {
    setLiked(val => !val);
    if (liked) {
      dispatch(removeFav(movieData));
    } else {
      dispatch(addToFav(movieData));
      alert('Movie added to favourite list.');
    }
  };

  const fetchMovieDetails = async () => {
    dispatch(
      setUIData({
        loader: true,
        loadingText: 'loading details...',
        loadingTextColor: 'white',
      }),
    );
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=b7261832&i=${imdbId}`,
    );

    response = await response.json();
    dispatch(setUIData({loader: false}));

    if (response.Response) {
      setMovieData(response);
    }
  };

  const Banner = () => {
    return (
      <View style={styles.bannerView}>
        {movieData?.Poster !== 'N/A' ? (
          <ImageBackground
            source={{
              uri: movieData?.Poster,
            }}
            style={styles.imgBgStyle}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <MaterialIcon name="west" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.ratedText}>Rated: {movieData?.Rated}</Text>
          </ImageBackground>
        ) : (
          <View style={styles.noBgView}>
            <TouchableOpacity
              style={styles.emptyBack}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <MaterialIcon name="west" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.appName}>Movie Buzz</Text>
            <Text style={styles.emptyPicDesc}>
              No poster available for this movie
            </Text>
          </View>
        )}
      </View>
    );
  };

  const TitleContainer = () => {
    return (
      <View style={styles.titleContainer}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{movieData?.Title}</Text>
          <Text style={styles.yearText}>Year : {movieData?.Year}</Text>
          <Text style={styles.genereText}>Genre : {movieData?.Genre}</Text>
          <Text style={styles.languageText}>
            Language : {movieData?.Language}
          </Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            onPress={() => {
              addFavList();
            }}
            style={styles.likeIcon}>
            <Icon
              name="thumbs-up"
              size={40}
              color={liked ? 'yellow' : 'white'}
            />
          </TouchableOpacity>
          <View style={styles.imdbView}>
            <View style={styles.imdbBox}>
              <Icon name="imdb" size={30} color="gold" />
              <Text style={styles.imdbRating}>{movieData?.imdbRating}</Text>
            </View>
            <View style={styles.heartView}>
              <Icon name="heart" size={30} color="red" />
              <Text style={styles.heartRating}>
                {movieData?.Ratings
                  ? movieData?.Ratings[1]?.Value
                    ? movieData?.Ratings[1]?.Value
                    : 'N/A'
                  : 'N/A'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const ProductionDetails = () => {
    return (
      <View style={styles.directorContianer}>
        <View style={styles.directorView}>
          <Text style={styles.directorText}>
            Director : {movieData?.Director}
          </Text>
          <Text style={styles.productionText}>
            Production House : {movieData?.Production}
          </Text>
        </View>
        <View style={styles.boxOfficeView}>
          <Text style={styles.boxOfficeText}>Box Office</Text>
          <Text style={styles.money}>{movieData?.BoxOffice}</Text>
        </View>
      </View>
    );
  };

  const SynopsysContainer = () => {
    return (
      <View style={styles.synopsysContainer}>
        <Text style={styles.synopsysText}>Synopysis :</Text>
        <Text style={styles.plotText}>{movieData?.Plot}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      {Banner()}
      {TitleContainer()}
      {ProductionDetails()}
      {SynopsysContainer()}
    </ScrollView>
  );
};

export default MovieDetailScreen;
