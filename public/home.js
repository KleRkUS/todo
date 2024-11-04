import { initModal } from './js/modal.js';
import { renderList } from './js/init.js';

window.onload = async () => {
    initModal(renderList);

    renderList().catch((err) => {
        console.log(err);
        alert('Something went wrong!');
    });
}
