import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/',
  key: '15c65cb183a74c819c4c3483ac688741',
  searchMovie: 'search/movie?',
  searchText: "",
  languageDefault: 'it-IT',
  foundedMovies: []
})