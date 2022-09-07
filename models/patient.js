import { Sequelize, Model, DataTypes, DATEONLY } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const patient = sequelize.define('User', {
    id:DataTypes.INTEGER,
  nom: DataTypes.STRING,
  prenom: DataTypes.STRING,
  age : DataTypes.INTEGER,
});
module.exports=patient