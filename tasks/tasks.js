import { getUser, signOutUser } from "../services/user_services.js";
import createLogoutButton from "../components/LogoutButton.js";
import { addTodo } from "../services/todo_services.js";
import createAddTaskForm from "../components/AddTaskForm.js";

async function handlePageLoad() {
  const user = await getUser();
  if (!user) location.replace("../");
  console.log(user);
}

async function handleLogout() {
  await signOutUser();
}

async function handleAddTodo(todo) {
  await addTodo(todo);
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

function display() {
  CreateLogoutButton();
  CreateAddTaskForm();
}

handlePageLoad();
