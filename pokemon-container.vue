<template>
    <div class="container">
        <div class="buttons">
            <button v-on:click="desplazarse(0)">Prev</button>
            <span v-text="result.count"></span>
            <button v-on:click="desplazarse(1)">Next</button>
        </div>
        <div class="listado">
            <ul>
                <li v-for="datos in result.results">
                    <span v-on:click="irA(datos.url)">{{datos.url}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                data: this.$store.getters.getRegistroPokemon,
                result: {}
            }
        },
        mounted: function() {
            
        },
        methods: {
            desplazarse: function(sentido) {
                debugger;
                if (sentido === 1) {
                    this.$store.commit("resultSubEndPoint",this.result.next);
                } else {
                    this.$store.commit("resultSubEndPoint",this.result.previous);
                }
            },
            irA: function(url) {
                debugger;
                this.$store.commit("resultSubEndPoint",url)
            }
        },
        watch: {
            data: function(valor) {
                debugger;
                this.result = valor[0];
            }
        }
    };
</script>
<style scoped>
    .container {
        text-align: center;
    }
</style>

