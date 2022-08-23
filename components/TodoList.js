export default function createTodoList(root, { handleComplete, handleDelete }) {
  return ({ todos }) => {
    root.innerHTML = "";
    for (const todo of todos) {
      root.append(Todo({ todo, handleComplete, handleDelete }));
    }
  };
}

function Todo({ todo, handleComplete, handleDelete }) {
  const li = document.createElement("li");
  li.classList.add("task");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = todo.task;
  todo.completed
    ? taskSpan.classList.add("complete")
    : taskSpan.classList.remove("complete");

  const completeButton = document.createElement("button");
  completeButton.textContent = "DONE";
  completeButton.classList.add("complete-button");

  completeButton.disabled = todo.completed;

  completeButton.addEventListener("click", () => {
    handleComplete(todo.id, { completed: true });
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "REMOVE";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    handleDelete(todo.id);
  });

  li.append(taskSpan, completeButton, deleteButton);

  return li;
}
