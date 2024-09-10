import Kartyak from "./view/Kartyak.js"

const tartalomElem = $("#tartalom")


new Kartyak(tartalomElem)

$(window).on("kivalaszt", (event)=>{
    console.log(event.detail)
    kivalasztottAllatLista.push(event.detail)
    console.log(kivalasztottAllatLista)
})