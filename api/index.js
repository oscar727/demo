const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONEXIÓN A LA BASE DE DATOS
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'servonova'
});



// const db = mysql.createConnection({
//   host: 'sql.freedb.tech',
//   user: 'u_03Iajp',
//   password: '8vOnp1bBTlQP',
//   database: 'freedb_p8thIux0'
// });

db.connect(err => {

  if (err) {
    console.log('Error de conexión:', err);
  } else {
    console.log('Conectado a MySQL');
  }

});

// LOGIN
app.post('/login', (req, res) => {

  const { usuario, password } = req.body;

  if (usuario === 'admin' && password === '1234') {

    res.send('Login correcto');

  } else {

    res.send('Usuario o contraseña incorrectos');

  }

});

// GUARDAR CONTACTO
app.post('/contactos', (req, res) => {

  const { nombre, apellido, correo } = req.body;

  const sql = `
    INSERT INTO contactos(nombre, apellido, correo)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [nombre, apellido, correo], (err, result) => {

    if (err) {
      console.log(err);
      return res.send('Error al guardar');
    }
    res.redirect('https://oscar727.github.io/demo/');
    // res.send('Contacto guardado correctamente');

  });

});

// VER DATOS
app.get('/datos', (req, res) => {

  const sql = 'SELECT * FROM contactos';

  db.query(sql, (err, results) => {

    if (err) {
      console.log(err);
      return res.send('Error al obtener datos');
    }

    res.json(results);

  });

});

// ELIMINAR CONTACTO
app.delete('/contactos/:id', (req, res) => {

  const { id } = req.params;

  const sql = 'DELETE FROM contactos WHERE id = ?';

  db.query(sql, [id], (err, result) => {

    if (err) {
      console.log(err);
      return res.send('Error al eliminar');
    }

    res.send('Contacto eliminado correctamente');

  });

});

// EDITAR CONTACTO
app.put('/contactos/:id', (req, res) => {

  const { id } = req.params;

  const { nombre, apellido, correo } = req.body;

  const sql = `
    UPDATE contactos
    SET nombre = ?, apellido = ?, correo = ?
    WHERE id = ?
  `;

  db.query(sql, [nombre, apellido, correo, id], (err, result) => {

    if (err) {
      console.log(err);
      return res.send('Error al editar');
    }

    res.send('Contacto editado correctamente');

  });

});

// VER PRODUCTOS
app.get('/productos', (req, res) => {

  const sql = 'SELECT * FROM productos';

  db.query(sql, (err, results) => {

    if (err) {

      console.log(err);

      return res.send('Error al obtener productos');

    }

    res.json(results);

  });

});

// INICIAR SERVIDOR
module.exports = app;