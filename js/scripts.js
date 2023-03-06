var titulo = document.getElementById("titulo");

function seguirMouse(e) {
    titulo.style.position = "absolute";
    titulo.style.left = (e.clientX / 15) + "px";
    titulo.style.top = (e.clientY / 10) + "px";
    titulo.style.transition = "none";
}

function soltarMouse() {
    titulo.style.position = "relative";
    titulo.style.left = "0";
    titulo.style.top = "0";
    titulo.style.transition = "1s ease";
}

document.getElementById("contenedor-titulo").addEventListener("mousemove", seguirMouse);

document.getElementById("contenedor-titulo").addEventListener("mouseout", soltarMouse);