
import { createContext, useState } from "react";

export const UserContext = createContext();

const API_URL = "https://pizzeria-backend-twwf.onrender.com";

function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  const login = async (email, password) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || "Error al iniciar sesión");
    }

    setToken(data.token);
    setEmail(data.email);

    return data;
  };

  const register = async (email, password) => {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || "Error al registrarse");
    }

    setToken(data.token);
    setEmail(data.email);

    return data;
  };

  const logout = () => {
    setToken(null);
    setEmail("");
  };

  const getProfile = async () => {
    const response = await fetch(`${API_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || "Error al obtener el perfil");
    }

    setEmail(data.email || data.user?.email);
    return data;
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
