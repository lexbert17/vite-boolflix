<script>
import { store } from "../store"

    export default {
        data(){
            return{
                store
            
            };
        },
        emits: ["perform-search"],
        methods(){

        }
    }
</script>

<template>
    <section>
        <h2> BOOLFLIX </h2>
        <div>
            <label for="search"></label>
            <input id="search" type="search" placeholder="Cerca film o serie tv..." v-model.trim="store.textSearch">
            <button @click="$emit('perform-search')"><i class="fa-solid fa-magnifying-glass fa-sm" style="color:"></i></button>
        </div>
    </section>

</template>

<style lang="scss" scoped>
section{
    height: 100px;
    display: flex;
    background-color:orange;
    justify-content: space-around;
    align-items: center;
    h2{
        color: red;
        font-family: 'Dosis Variable', sans-serif;
        font-size: 60px;  
    }

    input{
        height: 2rem;
        width: 200px;
    }
    button{
        height: 2rem;
        aspect-ratio: 1;
        background-color: #141414;
        color: white;
    }
}
</style>

