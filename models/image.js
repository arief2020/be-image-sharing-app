'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Image.hasMany(models.Comment, {
        foreignKey: 'image_id'
      })
      Image.hasMany(models.Like, {
        foreignKey: 'image_id'
      })
    }
  }
  Image.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};