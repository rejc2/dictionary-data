import fs from 'node:fs/promises';
import path from 'node:path';

export const moeCharacterStrokeDataPath = path.join(import.meta.dirname, 'data');

export async function getMoeCharacterStrokeDataFilePaths() {
	const fileDirents = await fs.readdir(moeCharacterStrokeDataPath, { withFileTypes: true });

	return fileDirents
		.filter(file => file.isFile() && file.name.endsWith('.xml'))
		.map(file => path.join(file.parentPath, file.name));
}
