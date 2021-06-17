import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
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
  },
  searchContianer: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: 260,
    top: 0,
  },
  appNameText: {
    fontFamily: 'Fathing',
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
  },
  searchBoxContainer: {
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    height: 40,
  },
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  filterContianer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  sortByText: {
    marginTop: 10,
    alignSelf: 'center',
    marginRight: 10,
    fontFamily: 'Muli-Regular',
    fontSize: 16,
    paddingVertical: 10,
  },
  checkBox: {
    width: 100,
    paddingLeft: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  searchBtnContainer: {
    marginTop: 20,
    width: '50%',
    backgroundColor: '#151515',
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Fathing',
    color: 'white',
  },
  headerContianer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  back: {
    padding: 20,
    alignSelf: 'center',
    flex: 1,
  },
  appNameContianer: {
    flex: 3,
  },
  burger: {
    padding: 20,
    alignSelf: 'center',
    flex: 1,
    alignItems: 'flex-end',
  },
});
