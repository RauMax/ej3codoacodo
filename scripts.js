let menuToggle = document.getElementById("menu-toggle")

menuToggle.addEventListener("click", function(){
    console.log("button clicked")
    menuToggle.classList.toggle("show-links");
})