const requests = {
  fetchNowPlaying: `/movie/now_playing`,
  fetchNetflixOriginals: `/discover/tv?with_networks=213`,
  fetchTrending: `/trending/all/week`,
  fetchTopRated: `/movie/top_rated`,
  fetchActionMovies: `/discover/movei?with_genres=28`,
  fetchComedyMovied: `/discover/movie?with_genres=35`,
  fetchHorrorMovied: `/discover/movie?with_genres=27`,
  fetchRomanceMovied: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
};
export default requests;
