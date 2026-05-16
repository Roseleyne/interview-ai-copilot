const fs = require('fs');
const path = require('path');

function logTest(message) {
  const logsDir = path.join(process.cwd(), 'logs');

  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }

  const line = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync(path.join(logsDir, 'test-execution.log'), line);
}

module.exports = { logTest };
