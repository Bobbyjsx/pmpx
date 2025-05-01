---
"pmpx": major
---

### Changeset Log

#### Summary of Changes

This changeset introduces significant updates to the `pmpx` project, including a migration to TypeScript, a new folder structure, and the addition of several development tools and dependencies. The changes aim to improve maintainability, developer experience, and code quality.

---

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

---

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

---

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

---

### Breaking Changes

#### 1. **Removed Legacy Config Handling**
   - The legacy `config.js` and `configHandler.js` files have been removed.
   - Configuration management is now handled by the new `src/utils/config.ts` module.

#### 2. **Removed Legacy Package Manager Detection**
   - The legacy `detectPM.js` file has been removed.
   - Package manager detection is now handled by the new `src/utils/detectPM.ts` module.

#### 3. **CLI Behavior Changes**
   - The CLI now relies on the compiled `dist` files, which requires running `npm run build` before using the CLI locally.

---

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

---

### Notes

- These changes improve the overall developer experience and align the project with modern best practices.
- The migration to TypeScript ensures better type safety and maintainability.
- The new folder structure makes the project more modular and easier to navigate.
