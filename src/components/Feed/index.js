import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post/components';
import Stories from '../../components/Stories';

const data = [
  {
    user: {
      imageUri:
        'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
      name: 'Lukas',
    },
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    caption: 'Aku Lukas huhu',
    likesCount: '12345',
    PostDateAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
      name: 'Lukas',
    },
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    caption: 'Aku Lukas huhu',
    likesCount: '12345',
    PostDateAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
      name: 'Lukas',
    },
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    caption: 'Aku Lukas huhu',
    likesCount: '12345',
    PostDateAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
      name: 'Lukas',
    },
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    caption: 'Aku Lukas huhu',
    likesCount: '12345',
    PostDateAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
      name: 'Lukas',
    },
    imageUri:
      'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?s=612x612',
    caption: 'Aku Lukas huhu',
    likesCount: '12345',
    PostDateAt: '6 minutes ago',
  },
];

const Feed = () => {
    return (
        <FlatList 
            data={data}
            renderItem={({item}) => <Post post={item}/>}
            ListHeaderComponent={Stories}
        />
    )
};

export default Feed;
