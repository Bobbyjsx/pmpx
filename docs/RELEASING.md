
# 📦 Releasing a New Version of pmpx

This guide explains how to version and publish a new release of `pmpx`.

## 1. Make Your Code Changes
Ensure your feature, fix, or enhancement is committed to your branch.

## 2. Generate a Changeset
Run:
```bash
npm run changeset:gen
```
Follow the prompts to:
- Select the packages that have changed
- Choose the appropriate bump type (patch, minor, major)
- Write a brief description of the changes

This will create a new file in the `.changeset` directory.

## 3. Version and Publish

When you're ready to release:

1. **Version the package**:
   ```bash
   npm run version
   ```
   This will:
   - Update the version in package.json based on your changesets
   - Update the CHANGELOG.md file
   - Remove the changeset files

2. **Commit and push**:
   The `postversion` script will automatically:
   ```bash
   git add .
   git commit -m 'chore(release): version bump'
   git push
   ```

3. **Publish to npm**:
   ```bash
   npm run changeset:release
   ```
   This will publish the new version to npm.

## 4. Create a GitHub Release (Optional)
After publishing, you may want to create a GitHub release with the same version number and release notes from your CHANGELOG.md.
