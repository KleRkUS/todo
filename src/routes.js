import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { initTasksApi, initHistoryApi } from './api/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const initRoutes = (app) => {
    app.get('/', async (req, res) => {
        res.sendFile(path.join(__dirname, '/pages/home.html'));
    });
    app.get('/history', async (req, res) => {
        res.sendFile(path.join(__dirname, '/pages/history.html'));
    });
    initTasksApi(app);
    initHistoryApi(app);
}
