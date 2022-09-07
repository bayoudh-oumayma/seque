const { DataTypes } = require('sequelize')
const sequelize = require('../shared/db')

const Doctor = sequelize.define('doctor',{
  id:{
    type:DataTypes.INTEGER,
  autoInccrement:true,
  allowNull:false,
  primaryKey:true,
  },
  nom:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  mobile:{
    type:DataTypes.INTEGER,
    allowNull:false,
    unique:true

  }

}

)
module.exports=Doctor