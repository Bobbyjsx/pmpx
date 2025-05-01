# 🤝 Contributing to pmpx

Thank you for your interest in contributing to `pmpx`! This is an open source project and contributions are welcome.

## Ways to Contribute
- Report bugs or suggest features via [GitHub Issues](https://github.com/Bobbyjsx/pmpx/issues)
- Open a pull request to fix bugs or add functionality
- Help improve documentation
- Share the project with others

## Development Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Bobbyjsx/pmpx.git
   cd pmpx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a feature branch:
   ```bash
   git checkout -b your-feature-name
   ```

4. Make your changes and test locally:
   ```bash
   npm run build  # compile TypeScript files
   npm link       # makes your local pmpx globally available
   ```
   This allows you to test your changes by running `pmpx` commands from any directory.

## Project Structure
- `/bin` - Contains the main CLI entry point
- `/src` - Source files (TypeScript)
  - `/commands` - CLI commands implementation
  - `/utils` - Helper functions for package manager detection and configuration
- `/dist` - Compiled JavaScript files
- `/docs` - Documentation files

## Development Tools
The project uses several development tools:
- **TypeScript**: For type safety and better code organization
- **Biome**: For linting and formatting
- **Husky**: For Git hooks
- **Changesets**: For versioning and release management

## Available Scripts
- `npm run build` - Compiles TypeScript files to JavaScript
- `npm run start` - Runs the project using ts-node
- `npm run lint` - Runs Biome to check code quality
- `npm run format` - Formats code using Biome
- `npm run changeset:gen` - Generates a new changeset
- `npm run version` - Updates version based on changesets

## Submitting Changes
1. Ensure your code follows the project's style and conventions
2. Run `npm run lint` and `npm run format` to check and format your code
3. Build the project with `npm run build` to ensure it compiles correctly
4. Add tests for new functionality if applicable
5. Generate a changeset to document your changes:
   ```bash
   npm run changeset:gen
   ```

   For a detailed changeset description, you can utilize AI tools by running:
   ```bash
   git diff | pbcopy
   ```
   This command copies the diff to your clipboard. You can then paste it into your preferred AI assistant and request a detailed changeset description based on the diff.
6. Commit your changes with a descriptive commit message
7. Push to your fork and submit a pull request

## Pull Request Process
1. Update the README.md or documentation with details of changes if needed
2. The PR should work on all supported platforms
3. Your PR will be reviewed by maintainers, who may request changes
4. Once approved, your PR will be merged

## Code of Conduct
- Be respectful and inclusive in your communications
- Focus on the technical merits of contributions
- Help create a positive community environment
