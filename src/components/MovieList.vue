<script>
import { store } from "../store";
export default{
    data() {
        return{
            store,
        };
    }
}
</script>

<template>
<section>
    <h2>lista film</h2>
    <div class="row" >
        <div class="col">
            <div class="card">
                <div class="front">
                    <img src="" alt="">
                </div> 

                <div class="details">
                    <!-- titolo  -->
                    <div>
                        <h3>Titolo:</h3>
                        <p>boh</p>
                    </div>
                    <!-- titolo originale  -->
                    <div>
                        <h3>Titolo originale:</h3>
                        <p>boh</p>
                    </div>
                    <!-- voto -->
                    <div>
                        <h3>voto:</h3> 
                    </div>
                    <!-- overview -->
                    <div>
                        <h3>Titolo originale:</h3>
                        <p>boh</p>
                    </div>
                </div>   
            </div>
        </div>

    </div>
</section>
</template>

<style  lang="scss" scoped>
section{
    width: 80%;
    margin:auto;
    background-color: green;
    min-height: 800px;
    margin-top: 3rem;

    .row{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
        

        .col{
          
            background-color: blue;
            align-self: center;
        }
            .card{
                height: 450px;
                width: 300px;
                border: 1px solid black;

                .details{
                    display: none;
                    color: white;
                }

                &:hover{
                    background-color: black;
                    
                    .front{
                        display: none;
                    }
                    .details{
                        display: block;
                        
                    }
                }
            }
    }
}

</style>