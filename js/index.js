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