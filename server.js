import express from 'express';
import sequelize from './config/database.js';
import dataDiriRoutes from './routes/dataDiri.js';
import authRoutes from './routes/auth.js'; // Import auth routes
import dotenv from 'dotenv';

dotenv.config(); // Memuat variabel lingkungan dari file .env

const app = express();

app.use(express.json());

// Rute untuk DataDiri
app.use('/data-diri', dataDiriRoutes);

// Rute untuk Autentikasi
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
