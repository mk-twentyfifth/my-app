// Global User State Management

import { createContext, useState } from "react";

// creating the context
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {}
  async function register(email, password) {}
  async function logout() {}

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
}
