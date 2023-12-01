import { reactive } from "vue";

export const store = reactive ({
    arrayMovie:[],
    arraySeries:[],
    topMovies:[],
    baseApiUrl:"https://api.themoviedb.org/3",
    isLoading: false,
    textSearch:"",
    

})