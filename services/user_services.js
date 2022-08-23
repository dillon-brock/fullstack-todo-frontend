const BASE_URL = 'http://localhost:7890';

export async function signUpUser(userInfo) {
  const res = await fetch(`${BASE_URL}/api/v1/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
    credentials: 'include',
  });

  const data = await res.json();
  if (res.ok) {
    location.replace('./tasks');
  } else {
    console.error(data.message);
  }
}

export async function signInUser(userInfo) {
  const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
    credentials: 'include',
  });

  const data = await res.json();
  if (res.ok) {
    location.replace('./tasks');
  } else {
    console.error(data.message);
  }
}

export async function getUser() {
  const res = await fetch(`${BASE_URL}/api/v1/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (res.ok) {
    const user = res.json();
    return user;
  }
}

export async function signOutUser() {
  const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (res.ok) {
    location.replace('../');
  }
}

export async function redirectIfLoggedIn() {
  const user = await getUser();
  if (user) {
    location.replace('./tasks');
  }
}
