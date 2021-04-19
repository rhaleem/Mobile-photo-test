import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles/Styles';
import PhotoList from './components/PhotoList';
import Button from './components/Button';
import { SafeAreaView} from 'react-native';

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

  const random = () => {
    const newList = [...photoList];
    newList.sort((id) => Math.random() - 0.5);
    setPhotoList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PhotoList photoList={photoList} />
      <Button onPress={random} />
    </SafeAreaView>
  );
};

export default App;
