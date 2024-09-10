class Kartya {
    #adatLista
    #htmlElem
    constructor(adatLista, htmlElem) {
        this.#adatLista = adatLista
        this.#htmlElem = htmlElem
        this.kutyaOsszeallit(this.#adatLista, this.#htmlElem)
        this.btnElem = $(".kiv:last")
        //this.#clickEsemeny(this.btnElem)
        this.#sajatClickEsemeny(this.btnElem, this.#adatLista)
    }

    kutyaOsszeallit(adat, hely) {
        let szoveg = `<div class="card"><h3 class="card-title">Neve: ${adat.nev}</h3>`
        szoveg += `<p class="card-text">Kora:${adat.kor}</p><p class="card-text"> Neme: ${adat.nem}</p>`
        szoveg += `<button class="kiv btn btn-success">Kiválaszt</button>`
        hely.append(szoveg)
    }

    #sajatClickEsemeny(gombElem, list){
        gombElem.on("click", ()=>{
            const esemeny = new CustomEvent("kivalaszt", {detail:list})
            window.dispatchEvent(esemeny)
        })
    }
}

export default Kartya

// a nyíl és a névtelen függvény különbsége a this használatában van. nyíl esetén html elemet fog jelenteni

//saját eseményt hozunk létre, hogy az object át tudjon magáról adni inforációkat