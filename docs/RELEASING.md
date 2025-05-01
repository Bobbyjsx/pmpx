
# 📦 Releasing a New Version of pmpx

This guide explains how to version and publish a new release of `pmpx` using the automated workflow with changesets.

## 1. Make Your Code Changes
Ensure your feature, fix, or enhancement is committed to your branch.

## 2. Build the Project
Before proceeding, make sure the TypeScript code is compiled:
```bash
npm run build
```

## 3. Generate a Changeset
Run:
```bash
npm run changeset:gen
```
Follow the prompts to:
- Select the packages that have changed
- Choose the appropriate bump type (patch, minor, major)
- Write a detailed description of the changes

This will create a new file in the `.changeset` directory.

## 4. Automated Release Process

The project uses GitHub Actions for automated versioning and publishing:

1. **Push your changes with the changeset**:
   ```bash
   git add .
   git commit -m 'feat: add new feature with changeset'
   git push
   ```

2. **Automated Versioning**:
   When changes are pushed to the `main` branch, the `version.yml` workflow will:
   - Update the version in package.json based on your changesets
   - Update the CHANGELOG.md file
   - Remove the changeset files
   - Commit these changes and create a git tag

3. **Automated Publishing and Release**:
   When a new tag is pushed (by the version workflow), the `publish.yml` workflow will:
   - Build the project
   - Publish the new version to npm
   - Create a GitHub release

After the release is complete:
- Check that the package is available on npm
- Verify the GitHub release was created
- Ensure the documentation reflects the new version
