import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-1">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>{item.desc}</p>
      <p>Categoría: {item.category}</p>
      <Link to={`/detail/${item.id}`} className="btn btn-primary">
        Ver más
      </Link>
    </div>
  );
};
