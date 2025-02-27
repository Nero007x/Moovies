import { useQuery } from '@tanstack/react-query'; 
import { fetchMovies } from './movieService';

export const useMoviesQuery = (page) => {
  return useQuery({
    queryKey: ['movies', page], // Pass the query key as an array
    fetcher: () => fetchMovies(page), // Fetch function that takes "page" as an argument
    keepPreviousData: true, // Keeps old data while fetching new data
  });
};