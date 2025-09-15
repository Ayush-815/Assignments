export function apiCallPromise() {
    //Data fetch gareko euta api bata
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      return { names: data.name };
    });
}


export async function apiCallAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const data = await response.json();
  return { sdf: data.name };
}
