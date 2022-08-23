export default function createAddTaskForm(form, { handleAddTodo }) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const todo = {
      task: formData.get('task'),
    };
    await handleAddTodo(todo);
    form.reset();
  });

  return () => {};
}
