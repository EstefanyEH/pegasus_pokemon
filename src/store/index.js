import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemones:[],
    favoritos:[],
  },
  mutations: {
  ADD_POKE:(state, pokemones)=>{
    state.pokemones = pokemones
  }, 

  ADD_FAVRITO:(state, favorito)=>{
    state.favoritos.push(favorito)
  },

  DELETE_POKE(state, name){
    let index = state.pokemones.findIndex(p =>p.name === name)
    state.pokemones.splice(index,1);
  }
  

  },
  actions: {
      fetchPokemones({commit}){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then(response =>{
          return response.json();
        })
        .then((data)=>{
          console.log(data.results)
          commit("ADD_POKE", data.results)
        })
      },

      add_favorito:({commit}, personaje)=>{
        commit ('ADD_FAVRITO', personaje)
      },

    delete_poke: ({commit},name)=>{
      commit('DELETE_POKE', name)
    }


  },
  modules: {
  }
})
