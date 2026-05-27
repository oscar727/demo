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

/* MENU HAMBURGUESA */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const enlacesMenu = document.querySelectorAll("nav a");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Cerrar menú al tocar un enlace
enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Cerrar menú si toca fuera
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove("active");
    }
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