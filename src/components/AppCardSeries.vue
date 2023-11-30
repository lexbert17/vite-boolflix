<script>
    export default {
        props: {
            objSeries: Object,
        },
        data() {
            return{
                flags: ["en", "it", "ja", "ke", "tl", "us"],
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

    <!-- card series  -->

    <div class="card">
        <div class="flex">
            <h3>Titolo:</h3>
            <p>{{ objSeries.name }}</p>
        </div>    
        <div class="flex">
            <h3>Titolo originale:</h3>
            <p>{{ objSeries.original_name }}</p>
        </div>

        <div class="flex">
            <h4>Lingua:</h4>
            <img v-if="flags.includes(objSeries.original_language)" :src="getImage(objSeries.original_language)" alt="objSeries.name">
            <p v-else>{{ objSeries.original_language }}</p>
        </div>  

        <div class="flex">
            <h4>Voto:</h4>
        </div>    
        <p>{{ objSeries.original_language }}</p>
        <p>{{ objSeries.overview }}</p>
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