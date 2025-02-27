import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';

const MovieDetails = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
      <Text style={styles.vote}>Rating: {movie.vote_average} / 10</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  poster: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  overview: {
    fontSize: 16,
    marginVertical: 10,
  },
  releaseDate: {
    fontSize: 16,
    marginVertical: 5,
  },
  vote: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default MovieDetails;
