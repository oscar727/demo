const contenedor = document.getElementById('productos');

async function cargarProductos() {
  try {
    const respuesta = await fetch('http://localhost:3000/productos');
    const productos = await respuesta.json();

    contenedor.innerHTML = '';

    productos.forEach(producto => {
      contenedor.innerHTML += `
        <div class="producto-card">
          <img src="${producto.imagen}" alt="${producto.nombre}">

          <div class="producto-info">
            <span class="categoria">${producto.categoria}</span>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <h4>$${Number(producto.precio).toLocaleString('es-CO')}</h4>

            <a 
              href="https://wa.me/573103794328?text=Hola,%20quiero%20cotizar%20${encodeURIComponent(producto.nombre)}"
              target="_blank"
              class="btn-cotizar">
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      `;
    });

  } catch (error) {
    console.log(error);
    contenedor.innerHTML = '<p>Error al cargar productos</p>';
  }
}

cargarProductos();