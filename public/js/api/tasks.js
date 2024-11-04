import { HEADERS } from '../constants/index.js';

export const getTasks = async () => {
    const res = await fetch('/tasks', {
        method: 'get',
        headers: HEADERS,
    });

    if (res.ok) {
        const parsed = await res.json();
        return parsed.list;
    } else {
        return [];
    }
}

export const createTask = async ({
    title,
    description
}) => {
    const res = await fetch('/tasks/create', {
        method: 'post',
        headers: HEADERS,
        body: JSON.stringify({
            title,
            description
        })
    });

    if (res.ok) {
        return null;
    } else {
        return res.status;
    }
}

export const closeTask = async ({
    id,
    status,
}) => {
    const res = await fetch(`/tasks/close?id=${id}`, {
        method: 'put',
        headers: HEADERS,
        body: JSON.stringify({ status })
    });

    if (res.ok) {
        return null;
    } else {
        return res.status;
    }
};
