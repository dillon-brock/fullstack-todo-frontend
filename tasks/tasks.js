import { getUser, signOutUser } from "../services/user_services.js";
import createLogoutButton from "../components/LogoutButton.js";
import { addTodo, completeTodo, getTodos } from "../services/todo_services.js";
import createAddTaskForm from "../components/AddTaskForm.js";
import createTodoList from "../components/TodoList.js";

let todos = [];

async function handlePageLoad() {
  const user = await getUser();
  if (!user) location.replace("../");
  todos = await getTodos();
  display();
}

async function handleLogout() {
  await signOutUser();
}

async function handleAddTodo(todo) {
  const newTodo = await addTodo(todo);
  todos.push(newTodo);
  display();
}

async function handleComplete(id, update) {
  const currentTodo = todos.find((todo) => todo.id === id);
  const updatedTodo = await completeTodo(id, update);
  todos.splice(todos.indexOf(currentTodo), 1, updatedTodo);
  display();
}

const CreateLogoutButton = createLogoutButton(
  document.querySelector("#logout"),
  { handleLogout }
);
const CreateAddTaskForm = createAddTaskForm(
  document.querySelector("#new-task"),
  { handleAddTodo }
);
const CreateTodoList = createTodoList(document.querySelector("#tasks"), {
  handleComplete,
});

function display() {
  CreateLogoutButton();
  CreateAddTaskForm();
  CreateTodoList({ todos });
}

handlePageLoad();
