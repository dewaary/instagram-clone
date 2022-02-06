import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Story from '../Story';

const data = [
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'Dewa Ary',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'dk_devi',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'aji candi',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'Marlin',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'Kuah Babi',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'Dewa Ary',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'dk_devi',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'aji candi',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'Marlin',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    name: 'Kuah Babi',
  },
];

const Stories = () => {
  return (
    <FlatList 
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={({name}) => name}
    style={styles.container}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  }
})

export default Stories;
