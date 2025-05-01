#!/usr/bin/env node
const { execSync } = require('child_process');
const { detectPM } = require('../utils/detectPM');
const { runpmpxConfig } = require('../utils/pmpxConfigHandler');

const args = process.argv.slice(2);

// Help message
if (args[0] === 'help') {
  console.log(`pmpx - Smart Package Manager Proxy

Usage:
  pmpx <command> [...args]       Run any command using the detected package manager
  pmpx pmpx-config get <key>      Get stored config value (e.g. pm)
  pmpx pmpx-config set <key> <val> Set config value (e.g. pmpx-config set pm yarn)
  pmpx help                      Show this message

Examples:
  pmpx install
  pmpx add react
  pmpx pmpx-config set pm pnpm
  pmpx pmpx-config get pm

pmpx detects the package manager by checking for:
  - pnpm-lock.yaml → pnpm
  - yarn.lock      → yarn
  - package-lock.json → npm

If none is found, and no config is set, it defaults to npm.
`);
  process.exit(0);
}

// Config handler
if (args[0] === 'pmpx-config') {
  runpmpxConfig(args.slice(1));
  process.exit(0);
}

// Proxy command
const pm = detectPM();
const command = `${pm} ${args.join(' ')}`;
try {
  execSync(command, { stdio: 'inherit' });
} catch (err) {
  console.error(`Failed to execute: ${command}`);
  process.exit(1);
}
