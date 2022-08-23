import { getUser, signOutUser } from "../services/user_services.js";
import createLogoutButton from "../components/LogoutButton.js";
import { addTodo, getTodos } from "../services/todo_services.js";
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
  await addTodo(todo);
  todos.push(todo);
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
const CreateTodoList = createTodoList(document.querySelector("#tasks"));

function display() {
  CreateLogoutButton();
  CreateAddTaskForm();
  CreateTodoList({ todos });
}

handlePageLoad();
