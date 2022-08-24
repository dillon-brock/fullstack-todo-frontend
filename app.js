import {
  redirectIfLoggedIn,
  signInUser,
  signUpUser,
} from './services/user_services.js';

const signUpForm = document.querySelector('#sign-up');
const signInForm = document.querySelector('#sign-in');

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(signUpForm);
  const userInfo = {
    email: formData.get('email'),
    password: formData.get('password'),
    firstName: formData.get('first-name'),
    lastName: formData.get('last-name'),
  };

  await signUpUser(userInfo);
});

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(signInForm);
  const userInfo = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  await signInUser(userInfo);
});

await redirectIfLoggedIn();
