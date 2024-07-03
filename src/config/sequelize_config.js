require('dotenv').config({
  'path': 'src/config/.env'
}); 

module.exports = {
  "development": {
    "dialect": "postgres",
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "port": process.env.DB_HOST_PORT
  }
};
