const { loggers, format, transports } = require('winston');

const dbPort = process.env.DB_HOST_PORT;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const port = process.env.SERVICE_PORT;

const infoLog = process.env.APP_LOG || 'logs/info.log';
const errorLog = process.env.APP_ERROR_LOG || 'logs/error.log';

let NODE_TLS_REJECT_UNAUTHORIZED: string;

const {combine, timestamp, prettyPrint} = format;
const logger = loggers.add('logger', {
  format: combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`+(info.splat!==undefined?`${info.splat}`:" "))
  ),
  transports: [
    new transports.File({
      filename: infoLog,
      level: 'info',
      maxsize: 10000000, // 10MB
      maxFiles: 5
    }),
    new transports.File({
      filename: errorLog,
      level: 'error',
      maxsize: 10000000, // 10MB
      maxFiles: 5
    })
  ]
});

if (!process.env.NODE_TLS_REJECT_UNAUTHORIZED) {
  NODE_TLS_REJECT_UNAUTHORIZED = "1";
} else {
  NODE_TLS_REJECT_UNAUTHORIZED = process.env.NODE_TLS_REJECT_UNAUTHORIZED;
}

if (!dbUsername) {
  logger.error(`[error]: ${"DB_USERNAME_mandatory"}`);
  process.exit(1);
} else if (!dbPassword) {
  logger.error(`[error]: ${"M3_PASSWORD_mandatory"}`);
  process.exit(1);
}

const getDbUsername = () => {
  return dbUsername;
};

const getDbPassword = () => {
  return dbPassword;
};

const getNODE_TLS_REJECT_UNAUTHORIZED = () => {
  return NODE_TLS_REJECT_UNAUTHORIZED;
};


const getPort = (): string => {
    return port;
  };

  const getDbPort = (): string => {
    return dbPort;
  };
  
  const getHost = (): string => {
    return dbHost;
  };
  
  const getDbName = (): string => {
    return dbName;
  };
  
const ConfigHelper = {
    getPort,
    getDbPort,
    getDbUsername,
    getDbPassword,
    getHost,
    getDbName
};


export default ConfigHelper;
