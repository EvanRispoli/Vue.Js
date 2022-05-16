
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
        {
          imdbID: "tt1185834",
          Title: "Star Wars: The Clone Wars",
          Year: "2008",
          Poster: "https://ia.media-imdb.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          Trailer: "https://www.youtube.com/embed/ZLW2jkd6E7g"
        },
        {
          imdbID: "tt0080684",
          Title: "Star Wars: Episode V - The Empire Strikes Back",
          Year: "1980",
          Poster: "https://ia.media-imdb.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          imdbID: "tt0121766",
          Title: "Star Wars: Episode III - Revenge of the Sith",
          Year: "2005",
          Poster: "https://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY268_CR9,0,182,268_AL_.jpg"
        },
        {
          imdbID: "tt0086190",
          Title: "Star Wars: Episode VI - Return of the Jedi",
          Year: "1983",
          Poster: "https://ia.media-imdb.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          imdbID: "tt2275656",
          Title: "Star Wars: Threads of Destiny",
          Year: "2014",
          Poster: "https://ia.media-imdb.com/images/M/MV5BMTkwMzM2NDQ1Nl5BMl5BanBnXkFtZTgwMzAyODExMTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          imdbID: "tt2076340",
          Title: "Star Wars: Star Warriors ",
          Year: "2007",
          Poster: "https://ia.media-imdb.com/images/M/MV5BYjUxN2EwNTEtZjEwYy00YmZiLTg4MDUtZmIxMzQ3MGZlYWU5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzAwODkyODg@._V1_UY268_CR82,0,182,268_AL_.jpg"
        }
      ],
      menu: [
        {
          title: "Perfil",
          icon: "https://img.icons8.com/color/48/000000/circled-user-female-skin-type-4--v1.png",
          url: "/perfil"
        },
        {
          title: "Destaques",
          icon: "https://img.icons8.com/color/48/000000/megaphone.png",
          url: "/destaques"          
        },
        {
          title: "Minha Lista",
          icon: "https://img.icons8.com/color/48/000000/numbered-list.png",
          url: "/mlista"
        },
        {
          title: "Contato",
          icon: "https://img.icons8.com/color/48/000000/communication.png",
          url: "/contato"
        },
        {
          title: "Trabalhe Conosco",
          icon: "https://img.icons8.com/color/48/000000/working-with-a-laptop.png",
          url: "/trabalhe"
        },
        {
          title: "Termos de Uso",
          icon: "https://img.icons8.com/color/48/000000/user-manual.png",
          url: "/termos"
        }
      ],
      categories: [
        "Ação",
        "Animações",
        "Documentários",
        "Ficção"
      ],
      social: {
        instagram: "string da url",
        facebook: "string da url",
        youtube: "string da url",
      },
    }
  },
  methods: {
    toggleMovie(movie) {
      // console.log(movie.Trailer);
      this.actualMovie = movie;

      // Mostrar ou esconder a janela do trailer
      // Acessar o elemto html do menu (DOM) 
      let trailer = document.querySelector(".m-trailer");
      // Adicionar / remover a classe .show (CSS)
      trailer.classList.toggle("show");
    },
    toggleMenu() {
      // Acessar o elemto html do menu (DOM)
      let menu = document.querySelector(".menu");
      // Adicionar / remover a classe .show (CSS)
      menu.classList.toggle("show");
    }
  }
});

// Montar a aplicação
app.mount("#app")