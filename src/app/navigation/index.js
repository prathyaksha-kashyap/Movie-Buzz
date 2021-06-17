import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SearchPage,
  ListingPage,
  MovieDetailPage,
  FavourtirePage,
} from '@screens';

const MainStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        headerMode="none"
        initialRouteName="SearchScreen"
        screenOptions={{animationEnabled: false}}>
        <MainStack.Screen name="SearchScreen" component={SearchPage} />
        <MainStack.Screen name="ListingScreen" component={ListingPage} />
        <MainStack.Screen name="DetailScreen" component={MovieDetailPage} />
        <MainStack.Screen name="FavouriteScreen" component={FavourtirePage} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
