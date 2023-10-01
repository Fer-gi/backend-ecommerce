import { Sequelize } from 'sequelize';

const dataBase = new Sequelize('products_database', 'root', 'Qwerty1987', {
  host: 'localhost',
  dialect: 'mysql'
});

export default dataBase;