const fs = require('fs');
const path = require('path');
const { getConfig } = require('./config');

function detectPM(cwd = process.cwd()) {
  const configPM = getConfig('pm');

  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn';
  if (fs.existsSync(path.join(cwd, 'package-lock.json'))) return 'npm';

  return configPM || 'yarn'; // fallback
}

module.exports = { detectPM };
