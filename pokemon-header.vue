<template>
    <nav>
        <ul>
            <li v-on:click="show()"><i class="fas fa-bars"></i></li>
            <li v-text="this.$store.getters.getTitle"></li>
        </ul>
    </nav>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        methods: {
            show: function() {
                if (!this.$store.getters.getShowMenu)
                    this.$store.commit("setShowMenu", true);
                else
                    this.$store.commit("setShowMenu", false);
            }
        }
    };
</script>
<style scoped>
    nav {
        width: 100%;
        height: 50px;
        background: #007cff;
        color: #ffffff;
        position: fixed;
        left: 0;
        top: 0;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.2);
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
        height: 50px;
        line-height: 50px;
    }
    ul li:nth-child(2) {
        width: calc(100% - 50px);
    }
    ul li:nth-child(1) {
        width: 50px;
    }
</style>

