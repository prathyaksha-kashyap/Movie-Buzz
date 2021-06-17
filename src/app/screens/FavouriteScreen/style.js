import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: 60,
    top: 0,
    flexDirection: 'row',
  },
  back: {
    paddingLeft: 20,
    alignSelf: 'center',
    flex: 1,
  },
  favoriteTitle: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  favText: {
    fontFamily: 'Fathing',
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 20,
  },
  flatListView: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  emptyView: {
    flex: 1,
    alignSelf: 'center',
  },
  emptyText: {
    color: 'white',
    fontFamily: 'Fathing',
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
