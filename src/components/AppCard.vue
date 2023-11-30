<script>
    export default {
        props: {
            objMovies: Object,
          
        },
        data() {
            return{
                flags: ["en", "it", "ja", "ke", "tl", "us"],
                imageSize: "https://image.tmdb.org/t/p/w342"
            };
        },
        methods: {
            getImage(language) {
                return new URL(`../assets/images/${language}.png` , import.meta.url).href;
            },
           
        }

    }
</script>

<template>

    <!-- card movies  -->

    <div class="card">
        <div class="flex">
            <h3>Titolo:</h3>
            <p>{{ objMovies.title }}</p>
        </div>    
        <div class="flex">
            <h3>Titolo originale:</h3>
            <p>{{ objMovies.original_title }}</p>
        </div>

        <div class="flex">
            <h4>Lingua:</h4>
            <img v-if="flags.includes(objMovies.original_language)" :src="getImage(objMovies.original_language)" alt="objMovies.title">
            <p v-else>{{ objMovies.original_language }}</p>
        </div>  

        <div class="flex">
            <h4>Voto:</h4>
            <i v-for="i in 5 - Math.ceil(objMovies.vote_average / 2)" class="fa-solid fa-star fa-sm"></i>
            <i v-for="i in Math.ceil(objMovies.vote_average / 2)" class="fa-regular fa-star fa-sm"></i>
            
      
        </div>    
        <p>{{ objMovies.original_language }}</p>
        <p>{{ objMovies.overview }}</p>

        <img :src="`${imageSize}objMovies.poster_path`" alt="">
    </div>  
    
    
</template>

<style lang="scss" scoped >
.card{
    background-color: green;
    border: 1 px solid black;
    width: 320px;
    height: 400px;

    .flex{
        display: flex;
        align-items: baseline;
        margin-bottom: 10px;

       
    }
    p{
        font-size: .8rem;
        }    
}
</style>