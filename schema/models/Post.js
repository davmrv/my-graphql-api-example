import {
  Model,
  DataTypes,
} from 'sequelize'
import sequelize from '../database'

class Post extends Model {}

Post.init({
  title: DataTypes.STRING,
  body: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Post',
});

export default Post;
