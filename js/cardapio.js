let expandir = document.querySelector(".expandir")
let recolher = document.querySelector(".recolher")

console.log(expandir)
console.log(recolher)   

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