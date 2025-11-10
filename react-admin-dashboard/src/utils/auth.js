export const USERS_KEY = "users";
export const LOGGED_IN_KEY = "loggedInUser";

export const registerUser = (name, email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const exists = users.some(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (exists) return false;

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
};

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const found = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (found) {
    localStorage.setItem(LOGGED_IN_KEY, JSON.stringify(found));
    return found;
  }
  return null;
};

export const getLoggedInUser = () =>
  JSON.parse(localStorage.getItem(LOGGED_IN_KEY));

export const logout = () => localStorage.removeItem(LOGGED_IN_KEY);