import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { UserContext } from "../context/UserContext.jsx";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const aumentar = (id) => {
    setCart((cartActual) =>
      cartActual.map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    );
  };

  const disminuir = (id) => {
    setCart((cartActual) =>
      cartActual
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (suma, pizza) => suma + pizza.price * pizza.count,
    0
  );

  const pagar = async () => {
    setMensaje("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Error al realizar la compra");
      }

      setMensaje("¡Compra realizada exitosamente! 🍕");
      setCart([]);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container my-4">
      <h2>Detalles del pedido:</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío 🍕</p>
      ) : (
        cart.map((pizza) => (
          <div
            key={pizza.id}
            className="d-flex align-items-center gap-3 border-bottom py-3 flex-wrap"
          >
            <img
              src={pizza.img}
              alt={pizza.name}
              width="120"
              style={{
                height: "90px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <div className="flex-grow-1">
              <h3>{pizza.name}</h3>
              <p className="mb-1">
                Precio: ${pizza.price.toLocaleString("es-CL")}
              </p>
              <p className="mb-0">
                Subtotal: $
                {(pizza.price * pizza.count).toLocaleString("es-CL")}
              </p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-danger"
                onClick={() => disminuir(pizza.id)}
              >
                −
              </button>

              <span>{pizza.count}</span>

              <button
                className="btn btn-outline-primary"
                onClick={() => aumentar(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      <h3 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h3>

      {mensaje && <p className="text-success mt-3">{mensaje}</p>}
      {error && <p className="text-danger mt-3">{error}</p>}

      <button
        className="btn btn-success mt-3"
        disabled={!token || cart.length === 0}
        onClick={pagar}
      >
        Pagar
      </button>
    </div>
  );
}

export default Cart;
