# pmpx

**pmpx** stands for "Package Manager Proxy" and is a versatile CLI tool designed to streamline your workflow by automatically detecting your project's package manager (pnpm, yarn, npm) and forwarding commands to it. With pmpx, you no longer need to remember or specify which package manager your project uses. It intelligently identifies the correct one based on your lockfile and seamlessly proxies all package manager commands. Just run your commands, and pmpx takes care of the rest.

## Install

```bash
npm install -g pmpx
```

## Usage

```bash
pmpx add react
pmpx install
pmpx run dev
```

## Configuration

You can configure a default package manager to be used when no lockfile is detected:

```bash
pmpx pmpx-config set pm pnpm
pmpx pmpx-config get pm
```

## Help

```bash
pmpx help
```

This provides detailed usage instructions, explains how detection works, and guides you on configuring defaults.
