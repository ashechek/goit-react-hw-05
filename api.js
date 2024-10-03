import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDY5Y2UyMTM5YmUzZTk3NmIwMDk5ZTdmNGFhNTVkZSIsIm5iZiI6MTcyNzk3NjM2Mi4zNTI0MDgsInN1YiI6IjY2ZmVkMjg0YjE0NjI4MmY3Yjg0ZWQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNceRFn4D3gty0EHHW4dQJ7CZ49gyEa_XQzVLJ6r3xg",
  },
};
const searchTrendingMoviesFu = async () => {
  const response = await axios.get(`/3/trending/movie/day?language=en-US`,options);
  return response.data;
};
const searchMoviesForQueryFu = async (query) => {
  const response = await axios.get(`/3/search/movie?query=${query}`, options);
  return response.data;
};
const searchMovieForId = async (id) => {
  const response = await axios.get(`/3/movie/${id}?language=en-US`, options);
  return response.data;
};
const getMoreInfoFu = async (id, word) => {
  const response = await axios.get(`/3/movie/${id}/${word}?language=en-US`, options);
  return response.data;
};



export {
  searchTrendingMoviesFu,
  searchMoviesForQueryFu,
  searchMovieForId,
  getMoreInfoFu,
};
