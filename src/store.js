import { reactive } from "vue";

export const store = reactive ({
    arrayMovie:[],
    arraySeries:[],
    topMovies:[],
    topSeries:[],
    baseApiUrl:"https://api.themoviedb.org/3",
    isLoading: false,
    textSearch:"",
    showSeries:"top 20 serie",
    showFilm:"top 20 movies"
    

})