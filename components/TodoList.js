export default function createTodoList(root, { handleComplete }) {
  return ({ todos }) => {
    root.innerHTML = "";
    for (const todo of todos) {
      root.append(Todo({ todo, handleComplete }));
    }
  };
}

function Todo({ todo, handleComplete }) {
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

  li.append(taskSpan, completeButton);

  return li;
}
