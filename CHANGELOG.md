# pmpx

## 2.1.1

### Patch Changes

- 604d38c: ## Changes in this release:

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

## 2.1.0

### Minor Changes

- 65fb315: Minor mods to ci

## 2.0.7

### Patch Changes

- 0a39b33: Fix ci cd

## 2.0.6

### Patch Changes

- 9c07ebd: Improved: detectPM now supports Python package managers:

## 2.0.5

### Patch Changes

- 1bcfca6: Remove anim command as it breaks the proxy

## 2.0.4

### Patch Changes

- 06ba527: fix animation

## 2.0.2

### Patch Changes

- 3105b8f: do not ignore dist

## 2.0.1

### Patch Changes

- 5da585d: Trigger publish workflow from version workflow and publish with public scope

## 2.0.0

### Major Changes

- 4b5877f: ### Changeset Log

  #### Summary of Changes

  This changeset introduces significant updates to the `pmpx` project, including a migration to TypeScript, a new folder structure, and the addition of several development tools and dependencies. The changes aim to improve maintainability, developer experience, and code quality.

  ***

  ### Major Changes

  #### 1. **Migration to TypeScript**

  - The project has been migrated from JavaScript to TypeScript for better type safety and maintainability.
  - New TypeScript configuration file (`tsconfig.json`) has been added.
  - All source files have been moved to the `src` directory and converted to `.ts` files.
  - The `dist` directory now contains the compiled JavaScript files.

  #### 2. **New Folder Structure**

  - The project has been reorganized into a more modular and maintainable structure:
    ```
    ├── bin/                # Entry point for the CLI
    ├── dist/               # Compiled output files
    ├── docs/               # Documentation files
    ├── src/                # Source files (TypeScript)
    │   ├── commands/       # CLI commands
    │   └── utils/          # Utility functions
    ├── biome.json          # Biome configuration
    ├── tsconfig.json       # TypeScript configuration
    ```
  - The `utils` folder has been moved under `src` and now contains TypeScript files.

  #### 3. **CLI Entry Point Update**

  - The CLI entry point (`bin/index.js`) now directly references the compiled `dist/index.js` file instead of containing the logic itself.

  #### 4. **Removed Legacy Files**

  - The following legacy files have been removed:
    - `utils/config.js`
    - `utils/configHandler.js`
    - `utils/detectPM.js`
    - `utils/pmpxConfigHandler.js`
  - These files have been replaced with their TypeScript counterparts in the `src` directory.

  ***

  ### Minor Changes

  #### 1. **New Development Tools**

  - Added the following dev dependencies:
    - `typescript`: For TypeScript compilation.
    - `ts-node`: For running TypeScript files directly.
    - `@types/node`: Type definitions for Node.js.
    - `@types/chalk-animation`: Type definitions for `chalk-animation`.
    - `@biomejs/biome`: For linting and formatting.
    - `husky`: For managing Git hooks.
  - Added `biome.json` for Biome configuration.

  #### 2. **Updated Scripts in `package.json`**

  - Added new scripts:
    - `build`: Compiles TypeScript files to JavaScript.
    - `start`: Runs the project using `ts-node`.
    - `lint`: Runs Biome to check code quality.
    - `format`: Formats code using Biome.
    - `prepare`: Sets up Husky Git hooks.
  - Updated the `prepublishOnly` script to ensure the project is built before publishing.

  #### 3. **Husky Integration**

  - Added Husky for managing Git hooks.
  - The `prepare` script ensures Husky is set up when dependencies are installed.

  #### 4. **Biome Integration**

  - Added Biome for linting and formatting.
  - Configured Biome to check and format the entire project.

  #### 5. **Changesets Integration**

  - Updated the `changeset` configuration to align with the new project structure.
  - Added scripts for generating and publishing changesets.

  #### 6. **Dependency Updates**

  - Updated `@types/node` to version `22.15.3`.
  - Added several optional dependencies for improved compatibility and performance.

  ***

  ### Patch Changes

  #### 1. **Improved CLI Commands**

  - Refactored CLI commands into separate modules under `src/commands`:
    - `anim.ts`: Handles animations.
    - `config.ts`: Manages configuration.
    - `help.ts`: Displays help messages.
    - `proxy.ts`: Proxies commands to the detected package manager.

  #### 2. **Improved Package Manager Detection**

  - The `detectPM` utility has been rewritten in TypeScript for better maintainability.

  #### 3. **Documentation Updates**

  - Added a `docs` folder containing:
    - `CONTRIBUTING.md`: Guidelines for contributing to the project.
    - `RELEASING.md`: Steps for releasing a new version.

  #### 4. **Improved Build Process**

  - The build process now compiles TypeScript files into the `dist` directory.
  - The `bin/index.js` file references the compiled `dist/index.js` file.

  ***

  ### Breaking Changes

  #### 1. **Removed Legacy Config Handling**

  - The legacy `config.js` and `configHandler.js` files have been removed.
  - Configuration management is now handled by the new `src/utils/config.ts` module.

  #### 2. **Removed Legacy Package Manager Detection**

  - The legacy `detectPM.js` file has been removed.
  - Package manager detection is now handled by the new `src/utils/detectPM.ts` module.

  #### 3. **CLI Behavior Changes**

  - The CLI now relies on the compiled `dist` files, which requires running `npm run build` before using the CLI locally.

  ***

  ### Migration Guide

  1. **Install New Dependencies**

     - Run `npm install` to install the new dependencies.

  2. **Build the Project**

     - Run `npm run build` to compile the TypeScript files.

  3. **Update CLI Usage**

     - Ensure the CLI entry point (`bin/index.js`) references the compiled `dist/index.js` file.

  4. **Adopt New Folder Structure**

     - Move any custom files or scripts to the appropriate directories in the new folder structure.

  5. **Use New Scripts**
     - Use the updated `lint`, `format`, and `build` scripts for development.

  ***

  ### Notes

  - These changes improve the overall developer experience and align the project with modern best practices.
  - The migration to TypeScript ensures better type safety and maintainability.
  - The new folder structure makes the project more modular and easier to navigate.

## 1.1.1

### Patch Changes

- # Changelog

  ## [Unreleased]

  ### Added

  - **`.gitignore`**: Added `AmazonQ.md` to the ignored files list.
  - **`README.md`**:
    - Added a detailed explanation of how `pmpx` works, including package manager detection logic.
    - Added a new "License" section with MIT license information and attribution to [Godswill Ezeala](https://github.com/Bobbyjsx).
    - Expanded examples for commands like `pmpx add`, `pmpx install`, and `pmpx run dev`.
    - Added a note on how to access the full list of commands via `pmpx help`.
  - **`docs/CONTRIBUTING.md`**:

    - Added a "Development Setup" section with detailed steps for setting up the project locally.
    - Added a "Code Structure" section explaining the purpose of key directories.
    - Expanded the "Submitting Changes" section with additional steps for testing and generating changesets.
    - Added a "Pull Request Process" section outlining PR requirements and review steps.
    - Added a "Code of Conduct" section to encourage respectful and inclusive communication.

  - **`docs/RELEASING.md`**:
    - Updated the release process to include detailed steps for versioning, committing, and publishing changes.
    - Added instructions for creating a GitHub release after publishing to npm.

  ### Changed

  - **`README.md`**:
    - Improved command examples with comments explaining their equivalence to npm/yarn/pnpm commands.
    - Enhanced the "Configuration" section with examples for setting and getting the default package manager.
  - **`docs/CONTRIBUTING.md`**:
    - Reorganized and expanded the setup and contribution guidelines for better clarity.
    - Updated instructions for running tests and generating changesets.
  - **`docs/RELEASING.md`**:
    - Replaced the old release scripts (`release:patch`, `release:minor`, `release:major`) with a simplified process using `npm run version` and `npm run changeset:release`.
    - Clarified the steps for generating changesets and publishing releases.

  ### Removed

  - **`github/workflows/publish.yml`**:
    - Deleted the GitHub Actions workflow for publishing to npm and creating GitHub releases. The release process is now manual and documented in `docs/RELEASING.md`.

  ### Fixed

  - **`package.json`**:
    - Simplified the release scripts:
      - Removed `release:patch`, `release:minor`, and `release:major` scripts.
      - Added a `version` script for versioning using changesets.
      - Added a `postversion` script to automatically commit and push version changes.

## 1.1.0

### Minor Changes

- ### 📝 Changelog

  #### `pmpx` – Enhancements

  - **Added project metadata** to `package.json`:
    - Repository, bugs, and homepage fields now link directly to the GitHub repo.
  - **Enabled CI/CD and automated releases**:
    - Added `scripts` for versioning (`version`, `postversion`, and `release`) using Changesets.
    - Installed `@changesets/cli` as a dev dependency to support changelog and release automation.
  - **Improved README with badges**:
    - Added npm version, weekly downloads, and GitHub stars badges for better visibility and credibility.
