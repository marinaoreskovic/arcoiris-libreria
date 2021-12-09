import React, { useState } from "react";

export const ItemCount = ({ stock = 10, initial = 0, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const handleRestar = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };
  const handleSumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <div className="mx-4">
      <button onClick={handleRestar} className="btn btn-outline-primary">
        -
      </button>
      <span className="mx-2">{cantidad}</span>
      <button onClick={handleSumar} className="btn btn-outline-primary">
        +
      </button>
      <div>
        <button
          onClick={() => {
            onAdd(cantidad);
          }}
          className="btn btn-success my-2"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
