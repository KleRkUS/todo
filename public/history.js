import { renderHistory } from "./js/helpers/renderHistory.js";
import { initModal } from "./js/modal.js";

window.onload = () => {
    initModal();

    renderHistory().catch((err) => {
        console.log(err);
        alert('Something went wrong!');
    });
};
