const Logger = require('@bdis-platform/logger-lib');

const logger = new Logger({
  serviceType: "fr",
  serviceId: "id",
  logLevel: "silly"
});

logger.silly("silly")
logger.debug("debug")
logger.verbose("verbose")
logger.info("info")
logger.warn("warn")
logger.error("error")