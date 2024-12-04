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

// Route PUT 

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      users[userIndex] = { id, ...req.body };
      res.json(users[userIndex]);
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
  });

// Route DELETE

  app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1);
      res.json(deletedUser);
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
  });
  
  