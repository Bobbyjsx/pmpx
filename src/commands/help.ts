export function showHelp() {
   console.log(`pmpx - Smart Package Manager Proxy

Usage:
  pmpx <command> [...args]         Run any command using the detected package manager
  pmpx pmpx-config get <key>       Get stored config value (e.g. pm)
  pmpx pmpx-config set <key> <val> Set config value (e.g. set pm yarn sets default package manager to yarn)
  pmpx help                        Show this message

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
}
