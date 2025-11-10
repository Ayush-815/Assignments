import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const login = (name) => setUser(name);
  const logout = () => setUser(null);
  return { user, login, logout };
};
//warpper for auth in gloabal state for authentication case