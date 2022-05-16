// Criar a instância do vue
const app = Vue.createApp({
    data: function() {
      return {
        actualMovie: null,
        movies: [
          {
            imdbID: "tt0076759",
            Title: "Star Wars",
            Year: "1977",
            Poster: "https://ia.media-imdb.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
          },
          {
            imdbID: "tt2527336",
            Title: "Star Wars: The Last Jedi",
            Year: "2017",
            Poster: "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            Trailer: "https://www.youtube.com/embed/Q0CbN8sfihY"
          },
          {
            imdbID: "tt2488496",
            Title: "Star Wars: The Force Awakens",
            Year: "2015",
            Poster: "https://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
          },
          {
            imdbID: "tt0120915",
            Title: "Star Wars: Episode I - The Phantom Menace",
            Year: "1999",
            Poster: "https://ia.media-imdb.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            Trailer: "https://www.youtube.com/embed/bD7bpG-zDJQ"
          },