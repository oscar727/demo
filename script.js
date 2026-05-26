console.log("Servonova Industrial cargado correctamente");

/* MODAL */

function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

/* CERRAR MODAL AL TOCAR AFUERA */

window.onclick = function(e) {
    const modal = document.getElementById("modal");

    if (e.target == modal) {
        modal.style.display = "none";
    }
}

/* ANIMACIONES AL HACER SCROLL */

const elementos = document.querySelectorAll(".animar");

function mostrarScroll() {
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 100) {
            elemento.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", mostrarScroll);
window.addEventListener("load", mostrarScroll);

/* MENU HAMBURGUESA */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* HEADER AL BAJAR */

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    header.classList.toggle("scroll", window.scrollY > 50);
});

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("ocultar");

    }, 1200);

});