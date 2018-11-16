

Vue.component ('movie-list', {
    props: ['movie'],

    template: `
    <div class="films">
        <h2>{{ movie.name }}</h2>
        <p><span>{{ movie.director }}</span></p>
        <p><span>{{ movie.cast }}</span></p>
        <p><span>{{ movie.music }}</span></p>
        <p><span>{{ movie.year }}</span></p>
        <p><span>{{ movie.genre }}</span></p>
        <p><span>{{ movie.secondgenre }}</span></p>
        <p><span>{{ movie.shelf }}</span></p>
    </div>
    `
});

const app = new Vue ({
    el: "#movies",

    /*mounted() {

        import json from 'movieshelf.json'
        export default {
            data() {
                return {
                    movielist: json
                }
            }
        };
    }*/


    data: {
        movies: []
     },

    mounted () {
        
        axios
        .get('https://raw.githubusercontent.com/henrik-foogel/movieshelf/master/json/movieshelf.json')
        .then(response => this.movies = response.data.movies)
    }
});