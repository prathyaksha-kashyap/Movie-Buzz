import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    justifyContent: 'center',
  },
  appNameText: {
    fontFamily: 'Fathing',
    fontSize: 32,
    marginTop: 20,
    textAlign: 'center',
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  descriptionText: {
    fontFamily: 'Muli-Regular',
    fontSize: 22,
    textAlign: 'center',
    textShadowColor: 'blue',
    marginHorizontal: 20,
  },
  searchContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 30,
    width: '50%',
    backgroundColor: '#151515',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Fathing',
    color: 'white',
  },
});
