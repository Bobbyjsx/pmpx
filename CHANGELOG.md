# pmpx

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
