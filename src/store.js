import { reactive } from "vue";

export const store = reactive ({
    arrayMovie:[],
    arraySeries:[],
    apiMovies: "https://api.themoviedb.org/3/search/movie",
    // baseApiUrl:"https://api.themoviedb.org/3",
    // loading: false,
    textSearch:"",
    

})