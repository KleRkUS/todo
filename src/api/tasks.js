import { writeFile } from 'fs/promises';
import { randomUUID } from 'crypto';
import {
    getCurrentDateString,
    readListFile,
    readHistoryFile,
} from '../utils/index.js';
import { pathToHistoryFile, pathToListFile } from '../constants/index.js';

export const initTasksApi = (app) => {
    app.get('/tasks', async (req, res) => {
        try {
            const data = await readListFile();

            res.json(data);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });

    app.post('/tasks/create', async (req, res) => {
        const { title, description } = req.body;

        const createdAt = getCurrentDateString();
        const id = randomUUID();

        try {
            const existingData = await readListFile();

            existingData.list.push({
                id,
                title,
                description,
                createdAt
            });

            await writeFile(pathToListFile, JSON.stringify(existingData));
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }

    });

    app.put('/tasks/close', async (req, res) => {
        const { id } = req.query;
        const { status } = req.body;

        try {
            const existingList = await readListFile();
            let currentRecord;

            const modifiedList = existingList.list.filter((record) => {
                    if (id === record.id) {
                        currentRecord = record;
                        return false;
                    }

                    return true;
            });
            await writeFile(pathToListFile, JSON.stringify({ list: modifiedList }));

            const existingHistory = await readHistoryFile();

            if (currentRecord) {
                const closedAt = getCurrentDateString();
                existingHistory.history.push({
                    ...currentRecord,
                    closedAt,
                    status,
                });
                await writeFile(pathToHistoryFile, JSON.stringify(existingHistory));
            }

            res.sendStatus(200);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}
