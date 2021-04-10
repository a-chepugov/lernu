const colors = {
	_: '\x1b[0m', // color reset
	log: '\x1b[1;32m',
	info: '\x1b[1;34m',
	error: '\x1b[0;31m',
};

const colorizePrefix = (colorPrefix) => colorPrefix + new Date().toISOString() + ':';

const logger = {
	log: (...args) => console.log(colorizePrefix(colors.log), ...args, colors._),
	info: (...args) => console.info(colorizePrefix(colors.info), ...args, colors._),
	error: (...args) => console.log(colorizePrefix(colors.error), ...args, colors._),
}

console.log("console.log message");
console.info("console.info message");
console.error("console.error message");

logger.log("logger.log message");
logger.info("logger.info message");
logger.error("logger.error message");
