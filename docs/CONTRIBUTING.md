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
   npm link  # makes your local pmpx globally available
   ```
   This allows you to test your changes by running `pmpx` commands from any directory.

## Code Structure
- `/bin` - Contains the main CLI entry point
- `/utils` - Helper functions for package manager detection and configuration

## Submitting Changes
1. Ensure your code follows the project's style and conventions
2. Add tests for new functionality if applicable
3. Generate a changeset to document your changes:
   ```bash
   npm run changeset:gen
   ```
4. Commit your changes with a descriptive commit message
5. Push to your fork and submit a pull request

## Pull Request Process
1. Update the README.md or documentation with details of changes if needed
2. The PR should work on all supported platforms
3. Your PR will be reviewed by maintainers, who may request changes
4. Once approved, your PR will be merged

## Code of Conduct
- Be respectful and inclusive in your communications
- Focus on the technical merits of contributions
- Help create a positive community environment
