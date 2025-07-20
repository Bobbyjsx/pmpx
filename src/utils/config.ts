import * as fs from 'node:fs';
import * as path from 'node:path';

const configPath: string = path.join(
	process.env.HOME || process.env.USERPROFILE || '',
	'.pmpxrc.json'
);

function getConfig(key?: string): any {
	if (!fs.existsSync(configPath)) return null;
	const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
	return key ? config[key] : config;
}

function setConfig(key: string, value: any): void {
	let config: Record<string, any> = {};
	if (fs.existsSync(configPath)) {
		config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
	}
	config[key] = value;
	fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

export { getConfig, setConfig, configPath };
