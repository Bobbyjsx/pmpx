![npm version](https://img.shields.io/npm/v/pmpx)
![npm downloads](https://img.shields.io/npm/dw/pmpx)
[![GitHub stars](https://img.shields.io/github/stars/Bobbyjsx/pmpx?style=social)](https://github.com/Bobbyjsx/pmpx)


# pmpx

**pmpx** stands for "Package Manager Proxy" and is a versatile CLI tool designed to streamline your workflow by automatically detecting your project's package manager (pnpm, yarn, npm) and forwarding commands to it. With pmpx, you no longer need to remember or specify which package manager your project uses. It intelligently identifies the correct one based on your lockfile and seamlessly proxies all package manager commands. Just run your commands, and pmpx takes care of the rest.

## Install

```bash
npm install -g pmpx
```

## Usage

```bash
pmpx add react        # Equivalent to npm/yarn/pnpm add react
pmpx install          # Equivalent to npm/yarn/pnpm install
pmpx run dev          # Equivalent to npm/yarn/pnpm run dev
```

## How It Works

pmpx automatically detects your project's package manager by checking for:
- `pnpm-lock.yaml` → uses pnpm
- `yarn.lock` → uses yarn
- `package-lock.json` → uses npm

If no lockfile is found, it uses the configured default or falls back to npm.

## Project Structure

The project is organized into a modular structure:
```
├── bin/                # Entry point for the CLI
├── dist/               # Compiled output files
├── docs/               # Documentation files
├── src/                # Source files (TypeScript)
│   ├── commands/       # CLI commands
│   └── utils/          # Utility functions
```

## Configuration

You can configure a default package manager to be used when no lockfile is detected:

```bash
pmpx pmpx-config set pm pnpm   # Set default package manager to pnpm
pmpx pmpx-config get pm        # Check current default package manager
```

## Development

pmpx is built with TypeScript and uses modern development tools:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

For more details on contributing, see the [Contributing Guide](docs/CONTRIBUTING.md).

## Help

For a full list of commands and options:

```bash
pmpx help
```
## Fun
Discover a delightful animation by running `pmpx anim`! Give it a try and brighten your day!

## Documentation
- [Release Guide](docs/RELEASING.md)
- [Contributing Guide](docs/CONTRIBUTING.md)

## License

MIT © [Godswill Ezeala](https://github.com/Bobbyjsx)
