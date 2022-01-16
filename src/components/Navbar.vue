<template>
  <Menubar :model="items" class="p-d-flex p-jc-between" style="color:white">
    <template #start><h4 class="p-ml-4">API-Pokemón</h4></template>
  </Menubar>
</template>

<script>

import Menubar from "primevue/menubar";
export default {
  name: "nav-component",
  // props: {},
  data: function () {
    return {
      items: [
        {
          separator: true,
        },
        {
          label: "Inicio",
          to: "/",
        },
        {
          label: "Pokemones",
          to: "/pokemones",
        },
        {
          label: "Favoritos",
          to: "/favoritos",
        },
      ],
    };
  },
  // computed: {},
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
    Menubar
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.p-menubar {
  border: 0px;
  background-color: gray;
  height: 100px;
}

.p-component {
  font-size: 1.5rem;
}
</style>