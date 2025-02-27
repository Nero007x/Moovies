import axios from 'axios';

export const fetchMovies = async (page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=1d9b898a212ea52e283351e521e17871&language=en-IN&page=${1}&region=IN`); // Replace with your actual API URL
  if (response.status !== 200) {
    throw new Error('Error fetching movies');
  }
  console.log("-------", response.data.results)
  return response.data.results; // Adjust the data structure as per your API response
};