'use strict';

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addLanguage,
  getLanguage,
  deleteLanguage,
} from '../actions/LanguageAction';
import Input from '../components/Input';
import Button from '../components/Button';
import List from '../components/List';
import LanguageReducer from '../reducers/LanguageReducer';

const Language = () => {
  const [languageName, setLanguageName] = useState('');
  const dispatch = useDispatch();

  const add = async (languageName) => {
    debugger;
    const data = {
      id: Math.floor(Math.random() * 999 + 100), //Return randmom number between 100 and 999
      name: languageName,
    };

    await dispatch(addLanguage(data));
    setLanguageName('');
  };

  const languages = useSelector((state) => state.LanguageReducer.languages);
  console.log(languages);

  useEffect(() => {
    debugger;
    const results = () => dispatch(getLanguage());
    console.log(results);
  }, [dispatch]);

  const remove = async (id) => {
    await dispatch(deleteLanguage(id));
  };

  return (
    //When a user click outside of the textbox then keyboard will disapear
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>React native tutorial with Redux</Text>

        <List languages={languages} onPress={remove} />

        <Input
          value={languageName}
          placeholderText="Enter your favorite language"
          onChangeText={(text) => setLanguageName(text)}
        />
        <Button title="Add" onPress={() => add(languageName)} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple',
  },
});
