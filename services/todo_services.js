const BASE_URL = "http://localhost:7890";

export async function addTodo(todo) {
  const res = await fetch(`${BASE_URL}/api/v1/todos`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(todo),
  });

  const response = await res.json();
  if (!res.ok) {
    console.error(response.message);
  }
}

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/api/v1/todos`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    credentials: "include",
  });

  const response = await res.json();
  if (res.ok) {
    return response;
  } else {
    console.error(response.message);
  }
}
