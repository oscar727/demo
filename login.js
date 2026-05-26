document
  .getElementById('loginForm')

  .addEventListener('submit', async(e) => {

    e.preventDefault();

    const usuario = document.getElementById('usuario').value;

    const password = document.getElementById('password').value;

    const respuesta = await fetch('http://localhost:3000/login', {

      method:'POST',

      headers:{
        'Content-Type':'application/json'
      },

      body: JSON.stringify({
        usuario,
        password
      })

    });

    const data = await respuesta.text();

    if(data === 'Login correcto'){

      localStorage.setItem('logueado', 'true');

      window.location.href = 'datos.html';

    }else{

      alert(data);

    }

});