let navToggle = document.querySelector(".nav-toggle")
let menuBurga = document.getElementById("menu-burga")



navToggle.addEventListener("click", function(){
    console.log("button clicked")
    menuBurga.classList.toggle("show")
})