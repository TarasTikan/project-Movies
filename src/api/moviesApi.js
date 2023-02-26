import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9f3449ca8495a13b6d35e887839f0061';

export const FetchTrendingMouviesList = () => {
  return axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
};

export const FetchSearchMovies = query => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

export const FetchMoviesDetails = id => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
};

export const FetchActorsList = id => {
  return axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export const FetchMoviesReviews = id => {
  return axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};
