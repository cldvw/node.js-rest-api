const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Pour traiter les données JSON

app.get('/users', (req, res) => {
    res.json(users);
  });

  const users = [
    { id: 1, firstName: "John", lastName: "Doe", role: "Admin" },
    { id: 2, firstName: "Jane", lastName: "Smith", role: "User" },
  ];
  

app.listen(port, () => {
  console.log(`Serveur démarré : http://localhost:${port}`);
});

  