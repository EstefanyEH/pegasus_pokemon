import store from "../../src/store";

describe('Prueba agregar favorito', () => {

    it('Agregar un pokemon favorito', () => {
        let favorito =
        {
            name: "pikachu",
            img:"kskkasaksa",
            id: 3,
            weight: 2,
             height:2
        }


        expect(store.state.favoritos).toHaveLength(0);
        store.dispatch('add_favorito', favorito);
        expect(store.state.favoritos).toHaveLength(1);
    });
});