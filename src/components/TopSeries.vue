<script>
import { store } from "../store";

export default{
    data() {
        return{
            store,
            flags: ["en", "it", "ja", "ke", "tl", "us"],
            imageSize: "https://image.tmdb.org/t/p/w342"
            
        }
    },
     methods: {
            getImage(language) {
                return new URL(`../assets/images/${language}.png` , import.meta.url).href;
            },
           
        },
};
</script>

<template>
<h2>{{this.store.showSeries}} </h2>
 <div class="row">   
    <div  class="col" v-for="serie in store.topSeries">   
        <div class="card">

        <div class="bg-image">
            <img v-if="serie.poster_path" :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`" alt="">
            <img  class="no-img" v-else src="../assets/images/No-Image.png" alt="">
            <div><h2>SERIE</h2></div>
        </div>

        <div class="details">
            <div class="flex">
                <h3>Titolo:</h3>
                <p>{{ serie.name }}</p>
            </div>    
            <div class="flex">
                <h3>Titolo originale:</h3>
                <p>{{ serie.original_name }}</p>
            </div>

            <div class="flex">
                <h4>Lingua:</h4>
                <img v-if="flags.includes(serie.original_language)" :src="getImage(serie.original_language)" alt="serie.name">
                <p v-else>{{ serie.original_language }}</p>
            </div>  

            <div class="flex">
                <h4>Voto:</h4>
                <i v-for="i in 5 - Math.ceil(serie.vote_average / 2)" class="fa-solid fa-star fa-sm"></i>
                <i v-for="i in Math.ceil(serie.vote_average / 2)" class="fa-regular fa-star fa-sm"></i>
            </div>    

            <div class="flex">
                <h3>Lingua:</h3>
                <p>{{ serie.original_language }}</p>
            </div>

            <div >
                <h3>Trama:</h3>
                <p v-if="serie.overview">{{ serie.overview }}</p>
                <p v-else> ...</p>
            </div>    
        </div>


        </div>  
    </div>
 </div>    

</template>

<style  lang="scss" scoped>

h2{
    color: white;
    font-family: 'Fira Sans', sans-serif;
    margin-top: 2rem;
}
.row{
    display: flex;
    overflow-y: hidden;
    margin-top: 1rem;    
    height: 500px;
    .col{
        
        .card{
        background-color: black;
        border: 1 px solid black;
        width: 340px;
        height: 500px;
        position: relative;
        
        &:hover{
            .details{
                display: block;
                border: 1px solid red;
            }
        }
            .bg-image img{
            height: 500px;
            width: 340px;   
            }
            h2{
                color: red;
                font-family: 'Dosis Variable', sans-serif;
                position: relative;
                background-color:black;
                width:103px;
                bottom: 4rem;
                left: 70%;
            }
            .details{
                position: absolute;
                top: 0;
                background-color: rgba($color: #000000, $alpha: 0.8);
                height: 100%;
                width: 100%;
                color: white;
                display: none;
                overflow-y: auto; 
                padding: 1rem;  
                .flex{
                    display: flex;
                    align-items: baseline;
                    margin-bottom: 10px; 
                    gap: .5rem;    
                }
            }


        }
    } 
}       
</style>