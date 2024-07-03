const { Sequelize } = require('sequelize');
const winston = require("winston");

import cnf from "./config/config";

const logger = winston.loggers.get('logger');
let sequelize: any = {};

const closeConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.close();
    logger.info('DB Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to DB:', error);
  }
}


const connect = () => {
  sequelize = new Sequelize(cnf.getDbName(), cnf.getDbUsername(), cnf.getDbPassword(), {
    host: cnf.getHost(),
    port: parseInt(cnf.getDbPort()),
    dialect: 'postgres'
  });
};

const db = {
  connect,
  closeConnection
}

export default db;