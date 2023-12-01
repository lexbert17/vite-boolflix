<script>
import axios from 'axios'
import { store } from './store';
import AppSearchHeader from "./components/AppSearchHeader.vue";
import AppMain from "./components/AppMain.vue";
import TopMovies from './components/TopMovies.vue';


export default {
  components: { AppSearchHeader, AppMain, TopMovies },  
    data() {
        return {
          store,
          
            
        };        
    },
    methods: {
      handleSearch() {
        this.store.isLoading = true
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
    computed:{
    
    } 
     
};
</script>

<template>
  
 <AppSearchHeader @perform-search="handleSearch()"/>
 <TopMovies/>
 <div><AppMain/></div>
 
 
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

</style> 
