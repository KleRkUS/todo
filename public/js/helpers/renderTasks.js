import { getReadableDateString } from "../utils/getReadableDateString.js";
import { closeTask as closeTaskAPI } from '../api/tasks.js';

const closeTask = (id, status, onComplete) => async () => {
    const res = await closeTaskAPI({ id, status });

    if (res !== null) {
        alert(`Error! Status code: ${res}`);
    }

    onComplete();
}

export const renderTasks = (tasks, onComplete) => {
    const main = document.querySelector('#tasks');
    main.replaceChildren();

    tasks.forEach(({
        id,
        title,
        description,
        createdAt
    }) => {
        const container = document.createElement('article');
        container.className = 'card task';

        const content = document.createElement('div');
        content.className = 'task__content';

        const titleElement = document.createElement('h3');
        titleElement.className = 'task__title';
        titleElement.innerText = title;

        const descriptionElement = document.createElement('p');
        titleElement.className = 'task__description';
        descriptionElement.innerText = description;

        content.appendChild(titleElement);
        content.appendChild(descriptionElement);
        container.appendChild(content);

        const controls = document.createElement('div');
        controls.className = 'task__controls';

        const timedates = document.createElement('div');
        timedates.className = 'task__timedates';

        const createdAtElement = document.createElement('span');
        const createdDateTime = getReadableDateString(createdAt);
        createdAtElement.innerText = `${createdDateTime.date}\n${createdDateTime.time}`;

        timedates.appendChild(createdAtElement);
        controls.appendChild(timedates);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'task__buttons';

        const cancel = document.createElement('button');
        cancel.className = 'button';
        cancel.innerText = 'cancel';
        cancel.addEventListener('click', closeTask(id, 'canceled', onComplete));

        const done = document.createElement('button');
        done.className = 'button task__button_primary button_primary';
        done.innerText = 'done';
        done.addEventListener('click', closeTask(id, 'done', onComplete));

        buttonsContainer.appendChild(cancel);
        buttonsContainer.appendChild(done);
        controls.appendChild(buttonsContainer);

        container.appendChild(controls);
        main.appendChild(container);
    });
}