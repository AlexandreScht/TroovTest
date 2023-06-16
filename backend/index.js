const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();


// Configurer Express
const app = express();
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3005'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
// Connexion à la base de données MongoDB avec Mongoose
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error('MongoDB database connection error :', error);
  });

// // Créer un modèle avec Mongoose
// const exempleSchema = new mongoose.Schema({
//   // Définir les propriétés de votre modèle
//   // par exemple : name: { type: String, required: true },
// });

// const ExempleModel = mongoose.model('Exemple', exempleSchema);

// // Configurer les routes avec Express
// app.get('/exemples', async (req, res) => {
//   try {
//     const exemples = await ExempleModel.find();
//     res.json(exemples);
//   } catch (error) {
//     res.status(500).json({ error: 'Erreur lors de la récupération des exemples' });
//   }
// });

// app.post('/exemples', async (req, res) => {
//   try {
//     const exemple = await ExempleModel.create(req.body);
//     res.json(exemple);
//   } catch (error) {
//     res.status(500).json({ error: 'Erreur lors de la création de l\'exemple' });
//   }
// });

app.use('/api', routes);

// Démarrer le serveur
const port = 3005;
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
