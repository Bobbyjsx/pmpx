import * as fs from 'node:fs';
import * as path from 'node:path';
import { getConfig } from './config';

function detectPM(cwd: string = process.cwd()): string {
	const exists = (file: string) => fs.existsSync(path.join(cwd, file));
	const configPM = getConfig('pm');

	//Python package managers
	if (exists('Makefile')) return 'make';
	if (exists('Pipfile')) return 'pipenv';
	if (exists('requirements.txt')) return 'pip';
	if (exists('pyproject.toml')) return 'poetry'; // can also mean pip/poetry
	if (exists('environment.yml') || exists('environment.yaml')) return 'conda';

	//JavaScript package managers
	if (exists('pnpm-lock.yaml') || exists('pnpm-workspace.yaml')) return 'pnpm';
	if (exists('yarn.lock')) return 'yarn';
	if (exists('package-lock.json')) return 'npm';
	if (exists('bun.lockb')) return 'bun';

	return configPM || 'yarn'; // fallback
}

export { detectPM };
