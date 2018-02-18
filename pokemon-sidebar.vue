<template>
    <div>
        <div v-bind:class="[{'menu':true, 'open':this.$store.getters.getShowMenu}]">
            <ul>
                <li>OP 1</li>
                <li>OP 2</li>
            </ul>
        </div>
    </div>
</template>
<script>
    module.exports = {
        mounted: function() {
            debugger;
        }
    };
</script>
<style scoped>
    .menu {
        width: 0px;
        height: 100%;
        z-index: 10;
        background: #007cff;
        color: #ffffff;
        position: fixed;
        left: 0;
        top: 0;
        box-shadow: 4px 0px 6px rgba(0,0,0,0.2);
        transition: all 400ms ease-out;
        overflow: hidden;
    }
    .open {
        width: 370px;
        transition: all 400ms ease-out;
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

