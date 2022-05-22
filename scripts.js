/* menu */
let navToggle = document.querySelector(".nav-toggle")
let menuBurga = document.getElementById("menu-burga")

/* elementos */
let ammount = document.getElementById("ammount")
let seleccion = document.getElementById("seleccion").value

/* botones */
let totalBtn = document.getElementById("total-btn")
let borrarBtn = document.getElementById("borrar-btn")

let total = 0

window.onload = document.getElementById("ticket-form").reset()

navToggle.addEventListener("click", function(){
    menuBurga.classList.toggle("show")
})

totalBtn.addEventListener("click", function(){
    let cantidad = document.getElementById("cantidad").value
    let index = document.getElementById("seleccion").selectedIndex
    let descuento = 0
    console.log(index)
    if(index === 0){
        console.log("Elegiste estudiante")
        descuento = (200 - (200 * 0.8)) * cantidad
    }
    else if(index === 1){
        console.log("Elegiste trainee")
        descuento = (200 - (200 * 0.5)) * cantidad
    }
    else{
        console.log("Elegiste junior")
        descuento = (200 - (200 * 0.15)) * cantidad
    }
    ammount.textContent = `Total a pagar: $ ${descuento}`
})