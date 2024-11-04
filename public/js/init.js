import { getTasks } from "./api/tasks.js";
import { renderTasks } from "./helpers/renderTasks.js";

export const renderList = async () => {
    const tasks = await getTasks();
    renderTasks(tasks, renderList);
}
