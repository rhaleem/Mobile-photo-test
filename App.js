import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Styles/Styles';
import CachedImage from 'react-native-expo-cached-image';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';

// Function that displays the Item title
const Item = ({ title, url }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>

    <View style={styles.photoShadow} />

    <CachedImage
      style={styles.photo}
      source={{
        uri: url,
      }}
    />
  </View>
);

const RandomButton = ({ onPress }) => (
  <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={() => onPress()}>
      <Text style={styles.text}>Random</Text>
    </Pressable>
  </View>
);

// Main App
const App = () => {
  const [photoList, setPhotoList] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    await axios
      .get('http://jsonplaceholder.typicode.com/photos/?_limit=10')
      .then((response) => {
        setPhotoList(response.data);
      });
  }

  function random() {
    const newList = [...photoList];
    newList.sort((id) => Math.random() - 0.5);
    setPhotoList(newList);
  }

  const renderItem = ({ item }) => <Item title={item.title} url={item.url} />;

  return (
    <SafeAreaView style={styles.container}>
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
      <RandomButton onPress={random} />
    </SafeAreaView>
  );
};

export default App;
