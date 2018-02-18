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
            debugger;
            state.title = title;
        },
        setShowMenu: function(state, status) {
            debugger;
            state.showMenu = status;
        },
        setSubEndPoints: function(state, valor) {
            state.subEndPoints.push(valor);
        },
        setErrors: function(state, valor) {
            state.errors = valor;
        },
        resultSubEndPoint: function(state, api) {
            debugger;
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
            debugger;
            return state.title;
        },
        getShowMenu: function(state) {
            debugger;
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
        "pokemon-sidebar": httpVueLoader("pokemon-sidebar.vue")
    },
    methods: {
        endpoints: function() {
            debugger;
            var _this = this;
            axios.get(this.$store.getters.getEndPoint)
                .then(function(response) {
                    debugger;
                    if (response.status === 200) {
                        for (index in response.data) {
                            _this.$store.commit("setSubEndPoints", response.data[index]);
                        }
                    }
                })
                .catch(function(e) {
                    debugger;
                    _this.$store.commit("setErrors", e);
                });
        },

    }
})