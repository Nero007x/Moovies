import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <MovieList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
