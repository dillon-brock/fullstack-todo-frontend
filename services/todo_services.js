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
