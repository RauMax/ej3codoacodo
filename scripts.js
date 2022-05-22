let menuToggle = document.getElementById("menu-toggle")
let menuBurga = document.getElementById("menu-burga")



menuToggle.addEventListener("click", function(){
    console.log("button clicked")
    menuBurga.classList.toggle("menu-hiden");
})