export default function createLogoutButton(button, { handleLogout }) {
  button.addEventListener('click', () => {
    handleLogout();
  });
  return () => {};
}
