Vue.component ('navigation-bar', {
    template: `
    <nav class="uninavbar" id="navbar">
	<a href="index.html" class="active">Movie List</a>
	<a href="addmovie.html">Add Movie</a>
</nav>
    `
})

Vue.component ('movie-list', {
    props: ['movie'],

    template: `
    <div class="films">
        <h2>{{ movie.name }}</h2>
        <p>Director: <span v-for="director in movie.director">{{ director }}</span></p>
        <p>Cast: <span v-for="cast in movie.cast">{{ cast }}</span></p>
        <p>Music: <span v-for="music in movie.music">{{ music }}</span></p>
        <p>Year: <span>{{ movie.year }}</span></p>
        <p>Genre: <span>{{ movie.genre }}</span></p>
        <p>Secondary Genre: <span>{{ movie.secondgenre }}</span></p>
        <p>Rating: <span>{{ movie.rating }}</span></p>
        <p>Place on shelf: <span>{{ movie.shelf }}</span></p>
    </div>
    `
});

Vue.component ('list', {
    props: ['movie'],

    template: `
    <div class="film-list">
        <h2><a href="">{{ movie.name }}</a></h2>
    </div>
    `
});

const app = new Vue ({
    el: "#movies",

    data: {
        movies: []
     },

    mounted () {   
        axios
        .get('https://raw.githubusercontent.com/henrik-foogel/movieshelf/master/json/movieshelf.json')
        .then(response => this.movies = response.data.movies)
    }
});