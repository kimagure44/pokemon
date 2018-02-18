var store = new Vuex.Store({
    state: {
        title: null,
        showMenu: false,
        subEndPoints: [],
        endPoint: "https://pokeapi.co/api/v2/",
        errors: null
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
        resultSubEndPoint: function(state, api) {
            axios.get(api)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(e) {
                    _this.$store.commit("setErrors", e);
                });
        }
    },
    getters: {
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
        "pokemon-container": httpVueLoader("pokemon-container.vue")
    },
    methods: {
        endpoints: function() {
            var _this = this;
            axios.get(this.$store.getters.getEndPoint)
                .then(function(response) {
                    if (response.status === 200) {
                        for (index in response.data) {
                            _this.$store.commit("setSubEndPoints", response.data[index]);
                        }
                    }
                })
                .catch(function(e) {
                    _this.$store.commit("setErrors", e);
                });
        },

    }
})