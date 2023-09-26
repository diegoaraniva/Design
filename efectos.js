var subir = document.getElementById("scrollBtn");
var nav = document.querySelector("nav");

function subirBoton(){
    window.scrollTo(0, 0);
}

function esconderNav(){
    nav.classList.toggle("scrollNav", this.window.scrollY>0);
}

function esconderBotonSubir(){
    subir.classList.toggle("scrollBtn", this.window.scrollY>0);
}

subir.addEventListener("click", subirBoton);
window.addEventListener("scroll", esconderNav);
window.addEventListener("scroll", esconderBotonSubir);