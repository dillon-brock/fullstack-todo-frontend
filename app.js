import { signUpUser } from "./services/user_services";

const signUpForm = document.querySelector("#sign-up");

signUpForm.addEventListener("submit", () => {
  const formData = new FormData(signUpForm);
  const userInfo = {
    email: formData.get("email"),
    password: formData.get("password"),
    firstName: formData.get("first-name"),
    lastName: formData.get("last-name"),
  };

  signUpUser(userInfo);
});
