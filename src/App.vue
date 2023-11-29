<script>
import axios from "axios"
import { store } from './store.js'
import AppSearchHeader from "./components/AppSearchHeader.vue";
import MovieList from "./components/MovieList.vue";

export default {
    Data() {
        return {
            store,
            arrayMovie:[]
        };        
    },
    components: { AppSearchHeader, MovieList },
    // created(){
    //   axios
    //   .get(this.store.apiMovies)
    //   .then(resp => {

    //   })
    // },

    created(){
      axios
        .get("https://api.themoviedb.org/3/search/movie" , {
          params: {
            api_key: "abe20a1486ed115da66c8e73498dd777",
           
        }
        })
        .then((resp) => {
            console.log(resp.data.result);
          // this.arrayMovie = resp
      
        });
    },
    
}
</script>

<template>
 <AppSearchHeader performSearch="handleSesrch"/>
<MovieList/>
</template>

<style lang="scss">
@use "./style/general.scss"
</style>
