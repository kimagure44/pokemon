var store = new Vuex.Store({
    state: {
        title: null,
        showMenu: false,
        subEndPoints: [],
        endPoint: "https://pokeapi.co/api/v2/",
        errors: null,
        showModal: false,
        showLoading: false,
        registroPokemon: []
    },
    mutations: {
        setTitle: function(state, title) {
            state.title = title;
        },
        setShowMenu: function(state, status) {
            state.showMenu = status;
        },
        setSubEndPoints: function(state, valor) {
            state.subEndPoints.push(valor);
        },
        setErrors: function(state, valor) {
            state.errors = valor;
        },
        setRegistroPokemon: function(state, valor) {
            state.registroPokemon.push(valor);
        },
        resultSubEndPoint: function(state, api) {
            var _this = this;
            axios.get(api)
                .then(function(response) {
                    debugger;
                    if (response.status === 200) {
                        _this.commit("setShowLoading", true);
                        _this.commit("setRegistroPokemon", { "count": response.data.count, "prev": response.data.previous, "next": response.data.next, "results": response.data.results })
                        _this.commit("setShowLoading", false);
                    }
                })
                .catch(function(e) {
                    debugger;
                    _this.commit("setShowLoading", true);
                    _this.commit("setErrors", e);
                    _this.commit("setShowModal", true);
                });
        },
        setShowModal: function(state, status) {
            if (status) {
                this.commit("setShowLoading", false);
            }
            state.showModal = status;
        },
        setShowLoading: function(state, status) {
            state.showLoading = status;
        }
    },
    getters: {
        getRegistroPokemon: function(state) {
            return state.registroPokemon;
        },
        getShowLoading: function(state) {
            return state.showLoading;
        },
        getTitle: function(state) {
            return state.title;
        },
        getShowMenu: function(state) {
            return state.showMenu;
        },
        getEndPoint: function(state) {
            return state.endPoint;
        },
        getErrors: function(state) {
            return state.errors;
        },
        getSubEndPoints: function(state) {
            return state.subEndPoints;
        },
        getShowModal: function(state) {
            return state.showModal;
        }
    }
});
var app = new Vue({
    store,
    el: "main",
    mounted: function() {
        this.$store.commit("setTitle", "PÁGINA PRINCIPAL");
    },
    created: function() {
        this.endpoints();
    },
    components: {
        "pokemon-header": httpVueLoader("pokemon-header.vue"),
        "pokemon-sidebar": httpVueLoader("pokemon-sidebar.vue"),
        "pokemon-container": httpVueLoader("pokemon-container.vue"),
        "pokemon-modal": httpVueLoader("pokemon-modal.vue"),
        "pokemon-loading": httpVueLoader("pokemon-loading.vue")
    },
    methods: {
        endpoints: function() {
            var _this = this;
            _this.$store.commit("setShowLoading", true);
            axios.get(this.$store.getters.getEndPoint)
                .then(function(response) {
                    debugger;
                    if (response.status === 200) {
                        for (index in response.data) {
                            _this.$store.commit("setSubEndPoints", { "nombre": index, "url": response.data[index] });
                        }
                        _this.$store.commit("setShowLoading", false);
                    }
                })
                .catch(function(e) {
                    debugger;
                    _this.$store.commit("setShowLoading", false);
                    _this.$store.commit("setErrors", e);
                    _this.$store.commit("setShowModal", true);
                });
        },

    }
})