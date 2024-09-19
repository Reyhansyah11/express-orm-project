// routes/dataDiri.js
import express from 'express';
import DataDiri from '../models/DataDiri.js';

const router = express.Router();

// Fungsi untuk konversi waktu ke Asia/Jakarta
const formatTimestampToJakarta = (timestamp) => {
  return new Date(timestamp).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
};

// Create
router.post('/', async (req, res) => {
  try {
    const dataDiri = await DataDiri.create(req.body);
    res.status(201).json({
      message: 'Data created successfully',
      data: dataDiri,
      createdAt: formatTimestampToJakarta(dataDiri.createdAt),
      updatedAt: formatTimestampToJakarta(dataDiri.updatedAt)
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read
router.get('/', async (req, res) => {
  try {
    const data = await DataDiri.findAll();
    const formattedData = data.map(d => ({
      ...d.toJSON(),
      createdAt: formatTimestampToJakarta(d.createdAt),
      updatedAt: formatTimestampToJakarta(d.updatedAt)
    }));
    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const data = await DataDiri.findByPk(req.params.id);
    if (data) {
      await data.update(req.body);
      res.json({
        message: 'Data updated successfully',
        data,
        updatedAt: formatTimestampToJakarta(data.updatedAt)
      });
    } else {
      res.status(404).json({ error: 'Data not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const data = await DataDiri.findByPk(req.params.id);
    if (data) {
      await data.destroy();
      res.json({ message: 'Data deleted successfully' });
    } else {
      res.status(404).json({ error: 'Data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
