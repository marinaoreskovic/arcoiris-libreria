import React from "react";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-2">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>{item.desc}</p>
      <button className="btn btn-primary">Ver más</button>
    </div>
  );
};
