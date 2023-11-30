<script>
    export default {
        props: {
            objMovies: Object,
        }
    }
</script>

<template>
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
        </div>    
        <div class="flex">
            <h4>Voto:</h4>
        </div>    
        <p>{{ objMovies.original_language }}</p>
        <p>{{ objMovies.overview }}</p>
    </div>    
</template>

<style lang="scss" scoped >
.card{
    background-color: green;
    border: 1 px solid black;
    width: 300px;
    height: 350px;

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