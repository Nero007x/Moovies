import React, { useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useMoviesQuery } from '../service/useMoviesQuery'; // Adjust the path as necessary

const MovieList = ({ navigation }) => {
  const [page, setPage] = useState(1); // State for pagination

  // Correctly destructure the response from the query hook
  const { data: movies, isLoading, error, refetch } = useMoviesQuery(page);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
      <View style={styles.movieItem}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.poster}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  // Show loading indicator while fetching
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Handle error state using the updated "error" variable
  if (error) {
    return (
      <View>
        <Text>Error fetching movies.</Text>
        <TouchableOpacity onPress={refetch}>
          <Text>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Render the movie list
  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={() => setPage((prevPage) => prevPage + 1)} // Load more data when reaching the end
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  movieItem: {
    flexDirection: 'row',
    margin: 10,
  },
  poster: {
    width: 100,
    height: 150,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default MovieList;