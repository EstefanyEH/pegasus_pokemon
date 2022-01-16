import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemones: [
      { nombre:"bulbasaur", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", height: "7", weight: "69" },
      { nombre:"ivysaur", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", height: "10", weight:"130" },
      { nombre:"venusaur", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", height: "20", weight:"100"},
      { nombre:"charmander ", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", height: "6", weight:"85" },
      { nombre:"charmeleon", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" , height: "11", weight:"190"},
      { nombre:"charizard", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" , height: "17", weight:"905"},
      { nombre:"squirtle", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" , height: "5", weight:"90"},
      { nombre:"tortuga de guerra", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", height: "10", weight:"225" },
      { nombre:"blastoise", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" , height: "16", weight:"855"},
      { nombre:"caterpie", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" , height: "3", weight:"29"},
      { nombre:"metapod", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" , height: "7", weight:"99"},
      { nombre:"butterfree", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" , height: "11", weight:"320"},
      { nombre:"weedle", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png", height: "3", weight:"32" },
      { nombre:"kakuna", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" , height: "6", weight:"100"},
      { nombre:"beedrill", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png", height: "10", weight:"295" },
      { nombre:"pidgey", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png", height: "3", weight:"18" },
      { nombre:"pidgeotto", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" , height: "11", weight:"300"},
      { nombre:"pidgeot", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" , height: "15", weight:"395"},
      { nombre:"rattata", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png", height: "3", weight:"35" },
      { nombre:"raticar", url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" , height: "7", weight:"185"}

    ],
    
    favoritos:[],
  },
  getters: {
    pokemon: (state) => {
      return state.pokemones
    },
  
  },
  mutations: {
  ADD_POKE(state, personaje){
    state.favoritos.push(personaje)
  }, 

  DELETE_POKE(state, index){
    state.favoritos.splice(index, 1)
  }
  

  },
  actions: {
    add_poke:({commit}, personaje)=>{
      commit('ADD_POKE', personaje)
    },

    delete_poke: ({commit} ,index)=>{
      commit('DELETE_POKE', index)
    }


  },
  modules: {
  }
})
