const express = require('express');
const app = express();
const port = 3000;

// Middleware pour traiter le JSON
app.use(express.json());

// Données fictives
const users = [
  { id: 1, firstName: "Ryan", lastName: "LE", role: "Admin" },
  { id: 2, firstName: "Michel", lastName: "Smith", role: "User" },
];

// Route GET
app.get('/users', (req, res) => {
  res.json(users);
});

// Route POST
app.post('/users', (req, res) => {
  console.log('Body reçu:', req.body); // Debug
  const newUser = req.body;
  users.push({ id: users.length + 1, ...newUser });
  res.status(201).json(newUser);
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré : http://localhost:${port}`);
});
