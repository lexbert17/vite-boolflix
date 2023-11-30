<script>
import axios from 'axios'
import { store } from './store';
import AppSearchHeader from "./components/AppSearchHeader.vue";
import AppMain from "./components/AppMain.vue"


export default {
  components: { AppSearchHeader, AppMain},  
    data() {
        return {
          store,
            
        };        
    },
    methods: {
      handleSearch() {

      axios
        .get("https://api.themoviedb.org/3/search/movie" , {
          params: {
            api_key: "abe20a1486ed115da66c8e73498dd777",
            query: this.store.textSearch,   
           },
        }) .then((resp) => {
          this.store.arrayMovie = resp.data.results;
          // console.log(resp);
        });


        axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
        api_key: "abe20a1486ed115da66c8e73498dd777",
        query: this.store.textSearch,
        },
      }).then ((resp) => {
        this.store.arraySeries = resp.data.results
      })
      },
      
    },    
};
</script>

<template>
 <AppSearchHeader @perform-search="handleSearch()"/>
 <AppMain/>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style> 
