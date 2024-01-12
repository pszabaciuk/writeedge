import type { Config } from 'drizzle-kit';

export default {
	schema: './src/db/schema.ts',
	out: './migrations',
	driver: 'better-sqlite',
	dbCredentials: {
		url: './sqlite.db',
	},
	verbose: true,
	strict: true,
} satisfies Config;
