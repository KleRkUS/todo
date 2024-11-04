import { readHistoryFile } from '../utils/index.js';

export const initHistoryApi = (app) => {
    app.get('/history/list', async (req, res) => {
        try {
            const data = await readHistoryFile();

            res.json(data);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}
