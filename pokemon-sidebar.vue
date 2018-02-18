<template>
    <div>
        <div v-bind:class="[{'menu':true, 'open':this.$store.getters.getShowMenu}]">
            <div class="rest" v-for="b in this.$store.getters.getSubEndPoints">
                <button v-text="b" v-on:click="query(b)"></button>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        mounted: function() {
        },
        methods: {
            query: function(valor) {
                this.$store.commit('resultSubEndPoint',valor)
            }
        }
    };
</script>
<style scoped>
    .menu {
        width: 0px;
        height: calc(100% - 50px);
        z-index: 10;
        background: #007cff;
        color: #ffffff;
        position: fixed;
        left: 0;
        top: 50px;
        box-shadow: 4px 0px 6px rgba(0,0,0,0.2);
        transition: all 200ms ease-out;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .open {
        width: 385px;
        transition: all 200ms ease-out;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul li {
        cursor: pointer;
        float: left;
        text-align: center;
        height: 20px;
        border-bottom:1px solid #dedede;
        width: 100%;
    }
    
</style>

