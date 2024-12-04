const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Pour traiter les données JSON

app.get('/', (req, res) => {
  res.json({ message: 'Bonjour je suis Ryan ! Bienvenue sur mon API REST simple!' });
});

app.listen(port, () => {
  console.log(`Serveur démarré : http://localhost:${port}`);
});
