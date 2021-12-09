import React from "react";

export const ItemCount = ({ increment, decrement, onAdd, counter }) => {
  return (
    <div className="m-4">
      <button onClick={decrement} className="btn btn-outline-primary">
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button onClick={increment} className="btn btn-primary">
        +
      </button>

      <div>
        <button className="btn btn-success my-2" onClick={onAdd}>
          Agregar
        </button>
      </div>
    </div>
  );
};
