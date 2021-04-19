import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import Photo from './Photo';

const PhotoList = ({ photoList }) => {
    
  const renderItem = ({ item }) => <Photo title={item.title} url={item.url} />;

  return (
    <FlatList
      data={photoList}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').width}
    />
  );
};

export default PhotoList;
