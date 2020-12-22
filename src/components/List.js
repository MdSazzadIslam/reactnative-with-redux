import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

const Item = ({name}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const List = ({languages, onPress}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <Item name={item.name} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        persistentScrollbar={true}
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          item.id;
        }}
      />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  item: {
    backgroundColor: 'purple',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 1,
    borderRadius: 8,
    height: 50,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
