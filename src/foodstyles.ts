import cnf from "./config/config";
import db from "./sequelize";

const http = require("http");
const winston = require("winston");

const logger = winston.loggers.get('logger');
logger.info('Starting HTTP server');

let server = http.createServer(function (
  request,
  response: { end: (arg0: string) => void }
) {
  const msg = "A home page :) " + request.url
  logger.info(msg);
  response.end(msg);
});

server.listen(cnf.getPort());
logger.info(`Server started @ ${cnf.getPort()}`);

db.connect();