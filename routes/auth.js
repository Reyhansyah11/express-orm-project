import express from 'express';
import DataDiri from '../models/DataDiri.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Endpoint untuk login
router.post('/login', async (req, res) => {
  const { nama, password } = req.body;

  try {
    // Temukan pengguna berdasarkan nama
    const user = await DataDiri.findOne({ where: { nama } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verifikasi password
    if (user.password !== parseInt(password, 10)) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Buat JWT token
    const token = jwt.sign({ id: user.id, nama: user.nama }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token berlaku selama 1 jam
    });

    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
