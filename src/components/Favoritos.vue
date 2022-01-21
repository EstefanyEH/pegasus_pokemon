<template>
  <div class="p-grid">
    <h1 class="p-m-6">Tus favoritos</h1>
  </div>
  <div class="p-grid p-ml-6">
    <div
      v-for="(favorito,i) in favoritos"
      :key="i"
      class="p-col-6 p-my-6 tarjeta"
    >
        <div class="p-ml-6">
          <h3 class="p-mr-6 p-as-start">{{ favorito[i].name}}</h3>
        </div>
        <div class="p-my-3">
          <img
            :src="favorito[i].img"
            :alt="favorito[i].nombre"
            class="p-my-6 p-as-end"
            style="height:200px"
          />
        </div>
     
    </div>
   
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name: "favoritos-comp",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["favoritos"]),
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
  components: {
   
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created(){
    this.favoritos
  }
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.tarjeta {
  display: inline-flex;
  
}



</style>