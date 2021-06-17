import {createStore, combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {reducer as UIReducer} from './UiReducer';
import {reducer as FavMoviesReducer} from './MovieReducer';

const rootReducer = combineReducers({
  UIData: UIReducer,
  FavouriteList: FavMoviesReducer,
});

const persistConfig = {
  key: 'root',
  stateReconciler: autoMergeLevel2,
  storage: AsyncStorage,
  whitelist: ['FavouriteList'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(persistedReducer);
  return store;
};

const store = configureStore();
export default store;
