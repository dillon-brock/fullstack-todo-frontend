export default function createTodoList(root) {
  return ({ todos }) => {
    root.innerHTML = "";
    for (const todo of todos) {
      root.append(Todo({ todo }));
    }
  };
}

function Todo({ todo }) {
  const li = document.createElement("li");
  li.classList.add("task");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = todo.task;

  li.append(taskSpan);

  return li;
}
