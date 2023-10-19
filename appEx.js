const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configura Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/a', (req, res) => {
  // Envia el archivo 'index.html' cuando se accede a la ruta raíz
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
