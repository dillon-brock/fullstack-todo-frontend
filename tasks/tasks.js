import { signOutUser } from "../services/user_services";

const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", async () => {
  await signOutUser();
});
