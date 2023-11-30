<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
import AppCardSeries from "./AppCardSeries.vue";
export default{
    data() {
        return{
            store,
        }
    },
    components: {AppCard , AppCardSeries},
};
</script>

<template>
<section>
    <div class="row">
        <!-- movies  -->
        <div class="col" v-for="movie in store.arrayMovie">
            <AppCard :objMovies = "movie" />
        </div> 

        <!-- series  -->
        <div class="col" v-for="series in store.arraySeries">
            <AppCardSeries :objSeries="series" />
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