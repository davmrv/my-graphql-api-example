import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from '../database';

class Author extends Model { }

Author.init({
  name: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Author',
});

export default Author;
