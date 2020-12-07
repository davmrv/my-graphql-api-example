import {
  Sequelize
} from 'sequelize';

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

database.sync();

export default database;
