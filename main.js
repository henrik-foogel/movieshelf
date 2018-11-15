

Vue.component ('movie-list', {
    props: ['movielist'],

    template: `
    <div class="films">
        <h2>{{ movielist.name }}</h2>
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
        movielist: []
     },

    mounted () {
        
        axios
        .get('movieshelf.json')
        .then(response => this.movielist = response.movies)
    }
});