---
"pmpx": patch
---

## Changes in this release:

### GitHub Actions Improvements
- Renamed GitHub Actions job 'test' to 'test-on-node-versions'
- Enabled the previously commented-out release and publish workflow
- Updated version workflow to depend on the node compatibility tests
- Fixed tag creation in the version workflow

### CLI Enhancements
- Added `pmpx version` command to show the currently installed version
- Updated help command output to include the version command
- Added command constants (`COMMANDS` enum) to centralize CLI command strings
- Improved formatting and indentation in the config command handler

### Developer Experience
- Updated Zed settings to improve language server integration
- Clarified steps in the RELEASING.md documentation
