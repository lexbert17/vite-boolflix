import { reactive} from "vue"

export const store = reactive ({
    arrayMovie:[],
    apiMovies: "https://api.themoviedb.org/3/search/movie",
    loading: false,
    searchText:""

})