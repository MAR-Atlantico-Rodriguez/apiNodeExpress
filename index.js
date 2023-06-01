const express = require('express');
const app = express();
const port = 3000;
const sqlite = require('sqlite');

// Open a database connection
const db = new sqlite.Database('blog.db', sqlite.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the database.');
  }
});

// Ruta de ejemplo
app.get('/', (req, res) => {
	db.select('select * from blog');
  res.send('¡Hola, mundo!');
});

app.get('/articulos', (req, res) => {
  res.send('Todos los articulos');
});

app.get('/ultimosTresArticulos', (req, res) => {
  res.send('Ultimos tres articulos');
});

app.get('/articulo/{id}', (req, res) => {
  res.send('un articulo');
});


app.post('/articulo', (req, res) => {
  res.send('Agregar articulo');
});

app.put('/articulo/{id}', (req, res) => {
  res.send('Editar articulo');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});