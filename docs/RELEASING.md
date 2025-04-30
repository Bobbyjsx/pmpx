
# 📦 Releasing a New Version of pmpx

This guide explains how to version and publish a new release of `pmpx`.

## 1. Make Your Code Changes
Ensure your feature, fix, or enhancement is committed.

## 2. Generate a Changeset
Run:
```bash
npm run changeset:gen
```
Follow the prompts to select the packages and bump type, and write a brief description.

## 3. Bump the Version & Push
Depending on the type of release:

```bash
npm run release:patch   # small fix
npm run release:minor   # new feature, non-breaking
npm run release:major   # breaking change
```

These commands will:
- Version the package
- Update changelog
- Commit and push changes with tags

## 4. CI/CD Will Do the Rest
Once pushed to `main`, GitHub Actions will publish the package to npm and create a GitHub Release.
