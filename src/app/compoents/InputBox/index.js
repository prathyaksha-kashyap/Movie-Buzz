import React from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const TextInputBox = props => {
  const {
    inputValue,
    onChangeText,
    inputContainerStyle,
    placeholder,
    maxLength,
    numberOfLines,
    keyboardType,
    editable,
    returnKeyType,
    placeholderTextColor,
    autoFocus,
  } = props;
  return (
    <TextInput
      style={[styles.inputContainer, inputContainerStyle]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      editable={editable}
      value={inputValue}
      numberOfLines={numberOfLines}
      maxLength={maxLength}
      onChangeText={text => {
        onChangeText(text);
      }}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
      autoFocus={autoFocus}
    />
  );
};

TextInputBox.propTypes = {
  editable: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
};

TextInputBox.defaultProps = {
  placeholder: 'Movie name..',
  editable: true,
  numberOfLines: 2,
  maxLength: 30,
  keyboardType: 'default',
  returnKeyType: 'done',
  placeholderTextColor: 'grey',
  autoFocus: false,
  // onChangeText: () => {},
};

export default TextInputBox;
