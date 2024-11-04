import { HEADERS } from '../constants/index.js';

export const getHistory = async () => {
    const res = await fetch('/history/list', {
        method: 'get',
        headers: HEADERS,
    });

    if (res.ok) {
        const parsed = await res.json();
        return parsed.history;
    } else {
        return [];
    }
}
