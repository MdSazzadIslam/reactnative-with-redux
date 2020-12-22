import React, {memo} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({value, placeholderText, onChangeText, ...props}) => {
  return (
    <TextInput
      style={styles.inputText}
      value={value}
      placeholder={placeholderText}
      onChangeText={onChangeText}
    />
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  inputText: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: '90%',
    shadowColor: '#000000',
    margin: 10,
    paddingLeft: 20,
  },
});
