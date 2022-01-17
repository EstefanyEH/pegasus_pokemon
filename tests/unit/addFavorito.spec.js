import store from "../../src/store";

describe('Prueba agregar favorito',()=>{
    
    it('Agregar un pokemon favorito',()=>{
        let favorito = {
            nombre: "pikachu",
            url:"kskkasaksa",
        }

        expect(store.state.favoritos).toHaveLength(0);
        store.dispatch('add_poke',favorito);
        expect(store.state.favoritos).toHaveLength(1);
    });
});