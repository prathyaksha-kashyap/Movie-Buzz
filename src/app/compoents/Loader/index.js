import React from 'react';
import {Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import {useSelector} from 'react-redux';
import styles from './style';

const Loader = () => {
  const {UIData} = useSelector(state => state);
  return (
    <AnimatedLoader
      visible={UIData.loader}
      overlayColor="rgba(255,255,255,0.75)"
      source={require('../../../assets/lottie/loaderone.json')}
      animationStyle={styles.animationStyle}
      speed={1}>
      <Text style={{color: UIData.loadingTextColor}}>{UIData.loadingText}</Text>
    </AnimatedLoader>
  );
};

export default Loader;
