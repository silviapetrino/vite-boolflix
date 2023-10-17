import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/',
  key: '15c65cb183a74c819c4c3483ac688741',
  languageDefault: 'it-IT',
  searchText: "",

  searchMovie: 'search/movie?',
  foundedMovies: [],
  searchTv: 'search/tv?',
  foundTv: [],

  imagePath: 'https://image.tmdb.org/t/p/w342'
})