const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}
