var log4js = require('log4js');
const path = require('path');

var log = null;
function CreatLogger() {
  this.Getlog = function () {
    if (log == null) {
      log4js.configure({
        appenders: {
          out: { type: 'console' },
          //out: { type: 'console' },
          task: { type: 'dateFile', filename: path.join(__dirname, '/logs/task'),/*pattern: "-dd.log",*/ alwaysIncludePattern: true },
          result: { type: 'dateFile', filename: path.join(__dirname, '/logs/result'), /*"pattern": "-dd.log",*/ alwaysIncludePattern: true },
          error: { type: 'dateFile', filename: path.join(__dirname, '/logs/error'), alwaysIncludePattern: true },
          default: { type: 'dateFile', filename: path.join(__dirname, '/logs/default'), alwaysIncludePattern: true },
          rate: { type: 'dateFile', filename: path.join(__dirname, '/logs/rate'), /*"pattern": "-dd.log",*/ alwaysIncludePattern: true }
        },
        categories: {
          default: { appenders: ['out', 'default'], level: 'info' },
          task: { appenders: ['task'], level: 'debug' },
          result: { appenders: ['result'], level: 'info' },
          error: { appenders: ['error'], level: 'error' },
          rate: { appenders: ['rate'], level: 'warn' }
        }
      }
      );
      log = log4js.getLogger("test");
      log.level = 'debug';//trace debug info warn error fatal
      
    }
    return log;
  }

}

module.exports = CreatLogger;