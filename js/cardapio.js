let expandir = document.querySelector(".expandir")
let recolher = document.querySelector(".recolher") 

expandir.addEventListener("click", e1)
recolher.addEventListener("click", r1)

function e1(){
    expandir.classList.add("esconde")
    recolher.classList.remove("esconde")
    let g1 = document.querySelector(".g1")
    g1.classList.remove("esconde")
}

function r1(){
    recolher.classList.add("esconde")
    expandir.classList.remove("esconde")
    let g1 = document.querySelector(".g1")
    g1.classList.add("esconde")
}

let expandirFrango = document.querySelector(".expandirFrango")
let recolherFrango = document.querySelector(".recolherFrango")

expandirFrango.addEventListener("click", e2)
recolherFrango.addEventListener("click", r2)

function e2(){
    expandirFrango.classList.add("esconde")
    recolherFrango.classList.remove("esconde")
    let g2 = document.querySelector(".g2")
    g2.classList.remove("esconde")
}

function r2(){
    recolherFrango.classList.add("esconde")
    expandirFrango.classList.remove("esconde")
    let g2 = document.querySelector(".g2")
    g2.classList.add("esconde")
}

let expandirSuina = document.querySelector(".expandirSuina")
let recolheSuina = document.querySelector(".recolherSuina")
console.log(expandirSuina)
console.log(recolheSuina)

expandirSuina.addEventListener("click", e3)
recolheSuina.addEventListener("click",r3)

function e3(){
    expandirSuina.classList.add("esconde")
    recolheSuina.classList.remove("esconde")
    let g3 = document.querySelector(".g3")
    g3.classList.remove("esconde")
}

function r3(){
    recolheSuina.classList.add("esconde")
    expandirSuina.classList.remove("esconde")
    let g3 = document.querySelector(".g3")
    g3.classList.add("esconde")
}

let expandirPeixe = document.querySelector(".expandirPeixe")
let recolherPeixe = document.querySelector(".recolherPeixe")

expandirPeixe.addEventListener("click", e4)
recolherPeixe.addEventListener("click",r4)

function e4(){
    expandirPeixe.classList.add("esconde")
    recolherPeixe.classList.remove("esconde")
    let g4 = document.querySelector(".g4")
    g4.classList.remove("esconde")
}

function r4(){
    recolherPeixe.classList.add("esconde")
    expandirPeixe.classList.remove("esconde")
    let g4 = document.querySelector(".g4")
    g4.classList.add("esconde")
}

let expandirTipico = document.querySelector(".expandirTipico")
let recolherTipico = document.querySelector(".recolherTipico")

expandirTipico.addEventListener("click", e5)
recolherTipico.addEventListener("click", r5)

function e5(){
    expandirTipico.classList.add("esconde")
    recolherTipico.classList.remove("esconde")
    let g5 = document.querySelector(".g5")
    g5.classList.remove("esconde")
}

function r5(){
    recolherTipico.classList.add("esconde")
    expandirTipico.classList.remove("esconde")
    let g5 = document.querySelector(".g5")
    g5.classList.add("esconde")
}

let expandirAcompanhamentos = document.querySelector(".expandirAcompanhamentos")
let recolherAcompanhamentos = document.querySelector(".recolherAcompanhamentos")

expandirAcompanhamentos.addEventListener("click", e6)
recolherAcompanhamentos.addEventListener("click", r6)

function e6(){
    expandirAcompanhamentos.classList.add("esconde")
    recolherAcompanhamentos.classList.remove("esconde")
    let g6 = document.querySelector(".g6")
    g6.classList.remove("esconde")
}

function r6(){
    recolherAcompanhamentos.classList.add("esconde")
    expandirAcompanhamentos.classList.remove("esconde")
    let g6 = document.querySelector(".g6")
    g6.classList.add("esconde")
}

let expandirSobremesas = document.querySelector(".expandirSobremesas")
let recolherSobremesas = document.querySelector(".recolherSobremesas")

expandirSobremesas.addEventListener("click", e7)
recolherSobremesas.addEventListener("click", r7)

function e7(){
    expandirSobremesas.classList.add("esconde")
    recolherSobremesas.classList.remove("esconde")
    let g7 = document.querySelector(".g7")
    g7.classList.remove("esconde")
}

function r7(){
    recolherSobremesas.classList.add("esconde")
    expandirSobremesas.classList.remove("esconde")
    let g7 = document.querySelector(".g7")
    g7.classList.add("esconde")
}