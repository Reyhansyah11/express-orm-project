import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const DataDiri = sequelize.define('DataDiri', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pekerjaan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default DataDiri;
