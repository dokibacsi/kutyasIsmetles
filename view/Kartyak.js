import { kutyusLista } from "../datas/kutyusLista.js"
import { cicaLista } from "../datas/cicaLista.js"
import Kartya from "./Kartya.js"

class Kartyak{
    #szuloElem
    constructor(szuloElem){
        this.#szuloElem = szuloElem
        this.#kartyaMegjelenit(kutyusLista, this.#szuloElem)
        this.#kartyaMegjelenit(cicaLista, this.#szuloElem)
        this.#kartyaMegjelenit(this.#szuloElem)
    }

    #kartyaMegjelenit(list, amibeMegy){
        list.forEach(elem => {
            new Kartya(elem, amibeMegy)
        })
    }
}

export default Kartyak