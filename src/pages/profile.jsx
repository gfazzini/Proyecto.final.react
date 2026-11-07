import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";

function Profile() {
  const { email, logout, getProfile } = useContext(UserContext);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Mi perfil</h1>
      <p>Email: {email}</p>
      <button
        type="button"
        className="btn btn-dark"
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Profile;