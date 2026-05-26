if(localStorage.getItem('logueado') !== 'true'){
  window.location.href = 'login.html';
}

fetch('http://localhost:3000/datos')
  .then(res => res.json())
  .then(datos => {

    const tabla = document.getElementById('tabla-contactos');

    datos.forEach(contacto => {

      tabla.innerHTML += `
        <tr>
          <td>${contacto.id}</td>
          <td>${contacto.nombre}</td>
          <td>${contacto.apellido}</td>
          <td>${contacto.correo}</td>

          <td>
            <button 
              class="editar"
              onclick="editarContacto(${contacto.id}, '${contacto.nombre}', '${contacto.apellido}', '${contacto.correo}')"
            >
              Editar
            </button>

            <button 
              class="eliminar"
              onclick="eliminar(${contacto.id})"
            >
              Eliminar
            </button>
          </td>
        </tr>
      `;

    });

  });

function eliminar(id){

  fetch(`http://localhost:3000/contactos/${id}`, {
    method:'DELETE'
  })

  .then(res => res.text())

  .then(data => {
    alert(data);
    location.reload();
  });

}

function editarContacto(id, nombre, apellido, correo){

  const nuevoNombre = prompt('Nuevo nombre:', nombre);
  const nuevoApellido = prompt('Nuevo apellido:', apellido);
  const nuevoCorreo = prompt('Nuevo correo:', correo);

  fetch(`http://localhost:3000/contactos/${id}`, {

    method:'PUT',

    headers:{
      'Content-Type':'application/json'
    },

    body: JSON.stringify({
      nombre: nuevoNombre,
      apellido: nuevoApellido,
      correo: nuevoCorreo
    })

  })

  .then(res => res.text())

  .then(data => {
    alert(data);
    location.reload();
  });

}

function buscarContacto(){

  const texto = document
    .getElementById('buscador')
    .value
    .toLowerCase();

  const filas = document.querySelectorAll('#tabla-contactos tr');

  filas.forEach(fila => {

    const contenido = fila.textContent.toLowerCase();

    if(contenido.includes(texto)){
      fila.style.display = '';
    }else{
      fila.style.display = 'none';
    }

  });

}
document
  .getElementById('cerrarSesion')
  .addEventListener('click', () => {
    localStorage.removeItem('logueado');
    window.location.href = 'login.html';
  });