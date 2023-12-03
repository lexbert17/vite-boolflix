<script>
import axios from 'axios'
import { store } from './store';
import AppSearchHeader from "./components/AppSearchHeader.vue";
import AppMain from "./components/AppMain.vue";
import TopMovies from './components/TopMovies.vue';
import TopSeries from './components/TopSeries.vue';


export default {
  components: { AppSearchHeader, AppMain, TopMovies, TopSeries },  
    data() {
        return {
          store,
          
            
        };        
    },
    methods: {

      handleSearch() {
        this.store.topMovies = [],
        this.store.topSeries =[],
        this.store.showFilm = "",
        this.store.showSeries = "",
      axios
        .get(`${this.store.baseApiUrl}/search/movie` , {
          params: {
            api_key: "abe20a1486ed115da66c8e73498dd777",
            query: this.store.textSearch,   
           },
        }) .then((resp) => {
          this.store.arrayMovie = resp.data.results;
          
          
          // console.log(resp);
        });


        axios
      .get(`${this.store.baseApiUrl}/search/tv`, {
        params: {
        api_key: "abe20a1486ed115da66c8e73498dd777",
        query: this.store.textSearch,
        },
      }).then ((resp) => {
        this.store.arraySeries = resp.data.results
      
      })
      } 
      
    }, 
    mounted(){
      axios
      .get(`${this.store.baseApiUrl}/movie/top_rated`, {
        params: {
        api_key: "abe20a1486ed115da66c8e73498dd777",
        },
      }).then ((resp) => {
        this.store.topMovies = resp.data.results
      
      });

      axios
      .get(`${this.store.baseApiUrl}/tv/on_the_air`, {
        params: {
        api_key: "abe20a1486ed115da66c8e73498dd777",
        },
      }).then ((resp) => {
        this.store.topSeries = resp.data.results
      
      })


    } 
     
};
</script>

<template>
 <AppSearchHeader @perform-search="handleSearch()"/>
  <AppMain/>

 <TopMovies/>
 <TopSeries/>
 
 
 
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

.none{
display: none;
}
</style> 
