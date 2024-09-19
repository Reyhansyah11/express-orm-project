import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('itel', 'root', 'reyyy', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    timezone: '+07:00' // Gunakan offset UTC untuk Asia/Jakarta
  },
  logging: false
});

export default sequelize;
