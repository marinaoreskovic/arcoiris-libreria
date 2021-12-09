import React from "react";
import { useNavigate } from "react-router";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <div className="container m-5">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>{item.desc}</p>

      <button className="btn btn-primary" onClick={handleVolver}>
        Volver
      </button>
    </div>
  );
};
