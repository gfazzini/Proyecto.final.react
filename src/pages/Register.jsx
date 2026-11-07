import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

function Register() {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validarDatos = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await register(email, password);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Registro</h1>

      <form onSubmit={validarDatos}>
        <div className="mb-3 w-25">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 w-25">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 w-25">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
}
export default Register;
