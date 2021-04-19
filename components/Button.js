import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/Styles';

const Button = ({ onPress }) => (
  <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={() => onPress()}>
      <Text style={styles.text}>Random</Text>
    </Pressable>
  </View>
);

export default Button;
