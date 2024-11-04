import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const pathToHistoryFile = path.join(__dirname, '../../public/history.json');
export const pathToListFile = path.join(__dirname, '../../public/list.json');
