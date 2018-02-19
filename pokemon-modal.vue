<template>
    <div v-bind:class="['modal',{'showModalInfo':this.$store.getters.getShowModal}]">
        <div class="modalHeader"><span>Informacion</span><i class="fas fa-times" v-on:click="closeModal()"></i></div>
        <div class="modalBody" v-text="this.$store.getters.getErrors"></div>
    </div>
</template>
<script>
    module.exports = {
        methods: {
            closeModal: function() {
                this.$store.commit('setShowModal',false);
            }
        }
    };
</script>
<style scoped>
    .modal {
        width: 300px;
        height: 125px;
        background: rgb(0, 124, 255);
        box-shadow: 3px 4px 24px rgba(0,0,0,0.4);
        border: 1px solid #dedede;
        position: absolute;
        bottom: -140px;
        right: 10px;
        transition: all 200ms ease-out;
        color:#ffffff;
    }
    .showModalInfo {
        bottom: 10px;
        transition: all 200ms ease-out;
    }
    .modal .modalHeader {
        width: 100%;
        border-bottom: 1px solid #dedede;
        padding: 5px;
    }
    .modal .modalHeader i {
        float: right;
        margin-right: 10px;
    }
</style>

