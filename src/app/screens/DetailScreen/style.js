import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  bannerView: {
    height: 300,
    backgroundColor: '#F2F2F2',
  },
  imgBgStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  ratedText: {
    backgroundColor: 'transparent',
    color: 'gold',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 16,
    fontFamily: 'Muli-Bold',
    margin: 10,
  },
  noBgView: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  appName: {
    color: 'black',
    fontSize: 32,
    fontFamily: 'Fathing',
    textAlign: 'center',
  },
  emptyPicDesc: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'Fathing',
    textAlign: 'center',
    marginTop: 10,
  },
  titleContainer: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  titleView: {
    flex: 3,
    padding: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Muli-Bold',
  },
  yearText: {
    color: '#F2F2F2',
    marginTop: 10,
    fontFamily: 'Muli-Regular',
    fontSize: 18,
  },
  genereText: {
    color: '#F2F2F2',
    marginTop: 2,
    fontFamily: 'Muli-Regular',
    fontSize: 18,
  },
  languageText: {
    color: '#F2F2F2',
    marginTop: 2,
    fontFamily: 'Muli-Regular',
    fontSize: 18,
    marginBottom: 5,
  },
  iconsContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeIcon: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  imdbView: {
    marginTop: 20,
  },
  imdbBox: {
    flexDirection: 'row',
  },
  imdbRating: {
    color: 'white',
    fontFamily: 'Muli-Bold',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
  },
  heartView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  heartRating: {
    color: 'white',
    fontFamily: 'Muli-Bold',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
  },
  directorContianer: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  directorView: {
    flex: 3.5,
    padding: 10,
  },
  directorText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Muli-Regular',
  },
  productionText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Muli-Regular',
    marginTop: 5,
  },
  boxOfficeView: {
    flex: 1.5,
    justifyContent: 'center',
  },
  boxOfficeText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Muli-Bold',
    fontWeight: 'bold',
  },
  money: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Muli-Bold',
    fontWeight: 'bold',
  },
  synopsysContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  synopsysText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Muli-Bold',
  },
  plotText: {
    color: '#F2F2F2',
    fontFamily: 'Muli-regular',
    fontSize: 16,
    marginTop: 5,
  },
  back: {
    bottom: 200,
    marginLeft: 20,
  },
  emptyBack: {
    top: -60,
  },
});
