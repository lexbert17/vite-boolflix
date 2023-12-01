<script>
import { store } from "../store";
import AppCard from "./AppCardMovie.vue";
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
        <div  class="col" v-for="movie in store.arrayMovie">
            <AppCard :objMovies = "movie"/>
        </div> 
    </div>    
        <!-- series  -->
        
            <div class="row">
                <div class="col" v-for="series in store.arraySeries">
                    <AppCardSeries :objSeries="series" />
                </div> 
            </div>
</section>
</template>

<style  lang="scss" scoped>
section{
    margin-top: 3rem;
    background-color: #141414;
   
    h2{
        color: white;
        font-size: 3rem;

    }
    .row{
        display: flex;
        justify-content: baseline;
        gap: 2rem;
        flex-wrap: wrap;
        
        

        .col{
            display: flex;
            align-self: center;
           
            
        }
    }    
}

</style>