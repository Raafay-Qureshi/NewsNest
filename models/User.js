const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize('postgres', 'postgres.lumxwiwmbfcxrhoydwyy', '6XhCHSzsJbc9PZMm', {
  host: 'aws-0-us-east-1.pooler.supabase.com',
  dialect: 'postgres',
  port: 5432
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  interests: {
    type: DataTypes.TEXT
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  timestamps: false // Disable the automatic createdAt and updatedAt columns
});

sequelize.sync();

module.exports = User;
