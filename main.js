var store = new Vuex.Store({
    state: {
        title: null,
        showMenu: false
    },
    mutations: {
        setTitle: function(state, title) {
            debugger;
            state.title = title;
        },
        setShowMenu: function(state, status) {
            debugger;
            state.showMenu = status;
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
        }
    }
});
var app = new Vue({
    store,
    el: "main",
    data: {
        endPoint: "https://pokeapi.co/api/v2/",
        subEndPoints: [],
        errors: null
    },
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
            var _this = this;
            axios.get(_this.endPoint)
                .then(function(response) {
                    if (response.status === 200) {
                        for (index in response.data) {
                            _this.subEndPoints.push(response.data[index]);
                        }
                    }
                })
                .catch(function(e) {
                    this.errors.push(e)
                });
        },
        call: function(api) {
            axios.get(api)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(e) {
                    this.errors.push(e)
                });
        }
    }
})