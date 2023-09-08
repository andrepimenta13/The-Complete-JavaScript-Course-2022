class FancyLogger {
  constructor() {
    // Ensure that only one instance is created
    if (FancyLogger.instance) {
      return FancyLogger.instance;
    }

    this.logs = [];
    FancyLogger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;
