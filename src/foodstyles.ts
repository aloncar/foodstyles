import cnf from "./config/config";
const http = require("http");
const winston = require("winston");

const logger = winston.loggers.get('logger');
logger.info('Starting HTTP server');

let server = http.createServer(function (
  request: { url: string },
  response: { end: (arg0: string) => void }
) {
  const msg = "A home page :) " + request.url
  logger.error(msg);
  response.end(msg);
});

server.listen(cnf.getPort());
logger.info('Server started @ ${get}');
