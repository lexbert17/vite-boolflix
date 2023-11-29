<script>
import { store } from "../store"
    export default {
        data(){
            return{
                store
            };
        }
    }
</script>

<template>
    <section>
        <h2> BOOLFLIX </h2>
        <div>
            <input type="text" placeholder="cerca un film" v-model.trim="store.searchText">
            <button @click="$emit('performSearch')">cerca</button>
        </div>
    </section>

</template>

<style scoped>

</style>

