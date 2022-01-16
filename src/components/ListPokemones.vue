<template>
  <div class="list">
    <h3 class="p-grid p-ml-5 p-pt-4">Lista de Pokemones</h3>
    <div class="p-grid">
      <ul
        class="list-none list-group p-col-6"
        v-for="(pokemon, i) in pokemon"
        :key="i"
      >
        <li class="list-group-item">
          <div class="text-500 font-medium p-col-6">
            {{ pokemon.nombre }}
          </div>
          <div class="w-6 p-col-4">
            <Button
              label="Info"
              class="p-button-info"
              @click="selectPokemon(i)"
            ></Button>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <DataTable
    class="p-py-6"
    :value="data"
    :paginator="true"
    :rows="5"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rowsPerPageOptions="[10]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} pokemones"
  >
    <template #empty>No has seleccionado un pokemon</template>
    <Column header="Favorito">
      <template #body>
        <Button
          label="Agregar"
          class="p-button-info"
          @click="addFavorito(data)"
        ></Button
      ></template>
    </Column>
    <Column field="nombre" header="Nombre" style="min-width: 12rem"> </Column>
    <Column field="height" header="Alto" style="min-width: 12rem"></Column>
    <Column field="weight" header="Ancho" style="min-width: 12rem"></Column>
    <Column header="Imagen">
      <template #body="slotProps"
        ><img :src="slotProps.data.url" :alt="slotProps.data.url" /> </template
    ></Column>
    <Column field="Eliminar" header="Eliminar">
      <template #body>
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-danger"
          @click="remove(i)"
          iconPos="left"
        ></Button>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "pokemones-comp",
  // props: {},
  data: function () {
    return {
      first: 0,
      totalRecords: 2,
      data: null,
    };
  },
  mounted() {
    this.data =[];
  },
  computed: {
    ...mapGetters(["pokemon"]),
  },
  methods: {
    ...mapActions(["add_poke", "delete_poke"]),

    selectPokemon(i) {
      const poke = this.pokemon[i];
      console.log(poke)
      this.data.push(poke);
    },

    addFavorito(data) {
      this.add_poke(data)
      console.log(data)
    },

    remove(i) {
      this.delete_poke(i);
    },

   
  },
  components: {
    DataTable,
    Column,
    Button,
  },
};
</script>

<style scoped>
.list {
  border: solid 1px;
  width: auto;
  height: auto;
}

ul li {
  list-style-type: none;
  display: flex;
}
</style>