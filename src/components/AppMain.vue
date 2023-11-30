<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default{
    data() {
        return{
            store,
        }
    },
    components: {AppCard},
};
</script>

<template>
<section>
    <div class="row">
        <div class="col" v-for="movie in store.arrayMovie">
            <AppCard :objMovies = "movie"/>
        </div> 
    </div>   
</section>
</template>

<style  lang="scss" scoped>
section{
    margin-top: 3rem;
   

    .row{
        display: flex;
        justify-content: space-around;
        gap: 2rem;
        flex-wrap: wrap;
        background-color: yellow;
        

        .col{
            display: flex;
            align-self: center;
        }
    }    
}

</style>