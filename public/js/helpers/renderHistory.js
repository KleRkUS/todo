import { getReadableDateString } from "../utils/getReadableDateString.js";
import { getHistory } from '../api/history.js';

export const renderHistory = async () => {
    const tableBody = document.querySelector('#history__table__body');

    const history = await getHistory();

    history.forEach((historyRecord) => {
        const row = document.createElement('tr');

        Object.entries(historyRecord).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }

            let renderValue = value;

            if(key === 'createdAt' || key === 'closedAt') {
                const dateObj = getReadableDateString(value);
                renderValue = `${dateObj.date}\n${dateObj.time}`
            }

            const column = document.createElement('td');
            column.className = 'history__table-cell';

            if (key === 'status') {
                column.classList.add(
                    value === 'done'
                        ? 'history__status_done'
                        : 'history__status_cancelled'
                );
            }

            column.innerText = renderValue;
            row.appendChild(column);
        });

        tableBody.appendChild(row);
    });
}