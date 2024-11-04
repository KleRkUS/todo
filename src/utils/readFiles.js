import { readFile } from 'fs/promises';
import { pathToListFile, pathToHistoryFile } from '../constants/index.js';

export const readHistoryFile = async () => JSON.parse(
    await readFile(pathToHistoryFile, 'utf8')
);

export const readListFile = async () => JSON.parse(
    await readFile(pathToListFile, 'utf8')
);
