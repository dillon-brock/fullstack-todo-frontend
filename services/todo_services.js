const BASE_URL = 'https://db-backend-shopping-list.herokuapp.com';

export async function addTodo(todo) {
  const res = await fetch(`${BASE_URL}/api/v1/todos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(todo),
  });

  const response = await res.json();
  if (res.ok) {
    return response;
  } else {
    console.error(response.message);
  }
}

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/api/v1/todos`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'include',
  });

  const response = await res.json();
  if (res.ok) {
    return response;
  } else {
    console.error(response.message);
  }
}

export async function completeTodo(id, update) {
  const res = await fetch(`${BASE_URL}/api/v1/todos/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(update),
  });

  const response = await res.json();
  if (res.ok) {
    return response;
  } else {
    console.error(response.message);
  }
}

export async function deleteTodo(id) {
  await fetch(`${BASE_URL}/api/v1/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'include',
  });
}
