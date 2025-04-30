const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.HOME || process.env.USERPROFILE, '.pmpxrc.json');

function getConfig(key) {
  if (!fs.existsSync(configPath)) return null;
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  return key ? config[key] : config;
}

function setConfig(key, value) {
  let config = {};
  if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  config[key] = value;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

module.exports = { getConfig, setConfig, configPath };
