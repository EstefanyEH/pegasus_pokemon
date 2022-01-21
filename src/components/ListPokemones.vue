<template>
  <div class="list">
    <h3 class="p-grid p-ml-5 p-pt-4">Lista de Pokemones</h3>
    <div class="p-grid p-ml-6">
      <ul
        class="list-none list-group p-d-flex p-col-6"
        v-for="(pokemon, i) in pokemones"
        :key="i"
      >
        <li class="list-group-item" style="width: 25em">
          <div class="text-500 font-medium p-col-6">
            {{ pokemon.name }}
          </div>
        </li>
        <div class="p-col-6">
          <Button
            label="Info"
            class="p-button-info"
            @click="selectPokemon(i)"
          ></Button>
        </div>
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
    <Column field="name" header="Nombre" style="min-width: 11rem"> </Column>
    <Column field="height" header="Alto" style="min-width: 11rem"></Column>
    <Column field="weight" header="Ancho" style="min-width: 11rem"></Column>
    <Column header="Imagen">
      <template #body="slotProps"
        ><img
          :src="slotProps.data.img"
          :alt="slotProps.data.img"
          min-width="12rem"
        /> </template
    ></Column>
    <Column field="Eliminar" header="Eliminar">
      <template #body="slotProps">
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-danger"
          @click="remove(slotProps.data.name)"
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
import { mapActions, mapState } from "vuex";
export default {
  name: "pokemones-comp",
  // props: {},
  data: function () {
    return {
      first: 0,
      totalRecords: 2,
      data: [
        { name: "" },
        { img: "" },
        { height: "" },
        { weight: "" },
        { id: "" },
      ],
    };
  },
  computed: {
    ...mapState(["pokemones"]),
  },
  methods: {
    ...mapActions(["fetchPokemones", "delete_poke", "add_favorito"]),

    selectPokemon(i) {
      let pokemon = this.pokemones[i];

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((res) => res.json())
        .then((info) => {
          console.log(info);
          pokemon.name = info.name;
          pokemon.id = info.id;
          pokemon.img = info.sprites.front_default;
          pokemon.height = info.height;
          pokemon.weight = info.weight;
        }),
        this.data.push(pokemon);
      //console.log(pokemon);
    },

    addFavorito() {
      let favorito = this.data;
      this.add_favorito(favorito);
      //console.log(favorito);
    },

    remove(name) {
      let eliminado = this.data.findIndex(p => p.name === name)

      this.data.splice(eliminado,1)
      
      this.delete_poke(name)
    },
  },
  components: {
    DataTable,
    Column,
    Button,
  },
  mounted() {
    this.data = [];
    this.fetchPokemones();
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