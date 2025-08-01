import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['packages/**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			globals: globals.browser,
			ecmaVersion: 'latest',
			sourceType: 'module'
		}
	},
	{
		files: ['scripts/**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			globals: globals.node,
			ecmaVersion: 'latest',
			sourceType: 'module'
		}
	},
	tseslint.configs.recommended,
	js.configs.recommended,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn'
		}
	}
]);
