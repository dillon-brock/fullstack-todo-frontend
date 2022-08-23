import { getUser, signOutUser } from "../services/user_services.js";
import createLogoutButton from "../components/LogoutButton.js";

async function handlePageLoad() {
  const user = await getUser();
  if (!user) location.replace("../");
}

async function handleLogout() {
  await signOutUser();
}

const CreateLogoutButton = createLogoutButton(
  document.querySelector("#logout"),
  { handleLogout }
);

function display() {
  CreateLogoutButton();
}

handlePageLoad();
