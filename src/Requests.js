const key = '94552ffcd850cfdc02d2316f6c7aad5d'
const genres = [{id: 18, name: 'Drama'}, {id: 35, name: 'Comedy'}, {id: 27, name: 'Horror'}, {id: 28, name: 'Action'}, {id: 12, name: 'Adventure'}, {id: 16, name: 'Animation'}, {id: 14, name: 'Fantasy'}, {id: 10749, name: 'Romance'}, {id: 878, name: 'Science Fiction'}]

const requests = {
    requestMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestMoviesP2: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
    requestMoviesP3: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`,

    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`,
    requestTrendingP2: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTrendingP3: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

    requestTV: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTVP2: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=2`,
    requestTVP3: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=3`,
    requestTVSeries: `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${key}&without_genres=10767`,
    requestSitcoms: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35&with_keywords=193171`,

    requestGenres: genres.reduce((acc, genre) => {
        acc[genre.id] = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=${genre.id}&page=1&certification_country=US&certification.lte=PG-13`;
        return acc;
    }, {})
  };

  export default requests

  // search movie: https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'