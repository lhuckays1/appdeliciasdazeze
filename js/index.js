let contador = 1
document.querySelector("#bola1").ariaChecked = true

setInterval(function(){
    proxima();
},5000)

function proxima(){
    contador = contador + 1
    if(contador > 3){
        contador = 1
    }
    document.querySelector("#bola"+contador).checked = true
}

let executivo = document.querySelector("#executivo")
let familia = document.querySelector("#familia")
let kids = document.querySelector("#kids")

executivo.addEventListener("click", calc)
familia.addEventListener("click", calc2)
kids.addEventListener("click", calc3)
let prato1 = 0
let prato2 = 0
let prato3 = 0
let total = 0


function calc(){
    let valor = document.createElement("span")
    let pedido = document.querySelector(".pedido")
    pedido.innerHTML = ""
    let resposta = document.querySelector(".fixo2")
    resposta.classList.remove("esconde")
    total = total + 22.90
    console.log(total)
    valor.innerHTML = `Finalizar pedido: R$${total}`
    pedido.appendChild(valor)
}

function calc2(){
    let valor = document.createElement("span")
    let pedido = document.querySelector(".pedido")
    pedido.innerHTML = ""
    let resposta = document.querySelector(".fixo2")
    resposta.classList.remove("esconde")
    total = total + 45.90
    console.log(total)
    valor.innerHTML = `Finalizar pedido: R$${total}`
    pedido.appendChild(valor)
}
function calc3(){
    let valor = document.createElement("span")
    let pedido = document.querySelector(".pedido")
    pedido.innerHTML = ""
    let resposta = document.querySelector(".fixo2")
    resposta.classList.remove("esconde")
    total = total + 89.90
    console.log(total)
    valor.innerHTML = `Finalizar pedido: R$${total}`
    pedido.appendChild(valor)
}