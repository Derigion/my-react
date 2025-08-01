import path from 'path';
import fs from 'fs';
import ts from '@rollup/plugin-typescript';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return path.resolve(distPath, pkgName);
	} else {
		return path.resolve(pkgPath, pkgName);
	}
}

export function getPackageJson(pkgName) {
	const pkgJSONPath = path.resolve(resolvePkgPath(pkgName), 'package.json');
	const str = fs.readFileSync(pkgJSONPath, 'utf-8');
	return JSON.parse(str);
}

export function getBaseRollupPlugins() {
	return [cjs(), ts()];
}
