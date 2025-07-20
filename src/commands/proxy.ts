import { execSync } from 'node:child_process';
import { detectPM } from '../utils/detectPM';

export function runProxyCommand(args: string[]) {
	const pm = detectPM();
	const command = `${pm} ${args.join(' ')}`;

	try {
		execSync(command, { stdio: 'inherit' });
	} catch (_err) {
		console.error(`Failed to execute: ${command}`);
		process.exit(1);
	}
}
