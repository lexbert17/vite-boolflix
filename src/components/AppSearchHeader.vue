<script>
import { store } from "../store"
    export default {
        data(){
            return{
                store
            };
        },
        emits: ["perform-search"]
    }
</script>

<template>
    <section>
        <h2> BOOLFLIX </h2>
        <div>
            <label for="search">cerca film</label>
            <input id="search" type="search" v-model.trim="store.textSearch">
            <button @click="$emit('perform-search')">cerca</button>
        </div>
    </section>

</template>

<style scoped>

</style>

