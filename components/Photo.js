import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Styles';
import CachedImage from 'react-native-expo-cached-image';

const Photo = ({ title, url }) => (
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

export default Photo;
