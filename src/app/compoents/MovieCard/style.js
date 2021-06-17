import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  emptyBox: {
    flex: 1,
    backgroundColor: 'black',
    height: 280,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  movieBox: {
    flex: 1,
    backgroundColor: '#4a4e69',
    height: 280,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgView: {
    flex: 3.5,
  },
  imgBgStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleView: {
    flex: 1.5,
    backgroundColor: '#F2F2F2',
    overflow: 'hidden',
  },
  titleText: {
    paddingHorizontal: 10,
    paddingTop: 10,
    fontFamily: 'Muli-Black',
    fontSize: 14,
  },
  empmtyPoster: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  movieBuzz: {
    color: 'white',
    fontFamily: 'Fathing',
    fontSize: 20,
    textAlign: 'center',
  },
  emptyText: {
    color: 'white',
    fontFamily: 'Fathing',
    fontSize: 16,
  },
});
