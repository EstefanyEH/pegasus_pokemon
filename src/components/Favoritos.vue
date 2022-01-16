<template>
    <div class="p-grid">
        <h1 class="p-m-6">Tus favoritos</h1>
    </div>
        <div v-for="favorito in favoritos" :key="favorito.nombre">
            <h3 class="p-col">{{favorito.nombre}}</h3>
            <img src="" alt="">
        </div>
    
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'favoritos-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['favoritos'])
    },
    mounted(){
        this.favoritos
    },
    methods: {
        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>