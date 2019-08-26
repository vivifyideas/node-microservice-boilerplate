import log4js from "log4js";
const logger = log4js.getLogger();

const logError = (errorMessage) => {
  logger.level = "error";
  logger.error(errorMessage);
};

const logInfo = (infoMessage) => {
  logger.level = "info";
  logger.info(infoMessage);
};

module.exports = {
  logError,
  logInfo
};
