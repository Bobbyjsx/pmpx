import { COMMANDS } from '../utils/commands';

/**
 * Displays the help message for pmpx commands.
 * Lists available commands and their descriptions.
 */
export function showHelp() {
	const usageLines = [
		[
			'<command> [...args]',
			'Run any command using the detected package manager',
		],
		[`${COMMANDS.PMPX_CONFIG} get <key>`, 'Get stored config value (e.g. pm)'],
		[
			`${COMMANDS.PMPX_CONFIG} set <key> <val>`,
			'Set config value (e.g. set pm yarn sets default package manager to yarn)',
		],
		[COMMANDS.GET_VERSION_FULL, 'Show currently installed pmpx version'],
		[COMMANDS.GET_VERSION_SHORT, 'Show currently installed pmpx version'],
		[COMMANDS.HELP, 'Show this message'],
	];

	console.log('pmpx - Smart Package Manager Proxy\n');
	console.log('Usage:');
	usageLines.forEach(([cmd, desc]) => {
		console.log(`  pmpx ${cmd.padEnd(30)} ${desc}`);
	});

	console.log(`\nExamples:
  pmpx install
  pmpx add react
  pmpx ${COMMANDS.PMPX_CONFIG} set pm pnpm
  pmpx ${COMMANDS.PMPX_CONFIG} get pm

  pmpx detects the package manager by checking for:
    - pnpm-lock.yaml      → pnpm
    - yarn.lock           → yarn
    - package-lock.json   → npm

  If none is found, and no config is set, it defaults to npm.
`);
}
