import { createTask } from './api/tasks.js';

const initModalState = (modal) => {
    return () => {
        if (modal.style.display === 'none') {
            modal.style.display = 'flex';
        } else {
            modal.style.display = 'none';
        }
    };
};

const getCreateTask = (toggleModal, onComplete = () => {}) => async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');

    const res = await createTask({
        title,
        description
    });

    toggleModal();
    console.log(res);
    alert(res == null ? "Task created" : `Error! Status code: ${res}`);
    onComplete?.();
};

export const initModal = (onComplete) => {
    const modal = document.querySelector('#modal__overlay');

    const toggle = initModalState(modal);
    const toggleModal = (e) => {
        toggle();
    };

    const headerButton = document.querySelector('#header__add-task-button');
    const overlay = document.querySelector('#modal__overlay');
    const content = document.querySelector('#modal__content');
    const closeButton = document.querySelector('#modal__close');
    const cancelButton = document.querySelector('#modal__cancel');

    content.addEventListener('click', (e) => e.stopPropagation());

    headerButton.addEventListener('click', toggleModal);
    overlay.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });

    const form = document.querySelector('#modal__form');
    form.addEventListener('submit', getCreateTask(toggleModal, onComplete));
}
