import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1>🍕 Ups! Página no encontrada</h1>

      <p>Esta página no está en nuestro menú.</p>

      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
