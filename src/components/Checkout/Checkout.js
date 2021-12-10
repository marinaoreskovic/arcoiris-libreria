import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  collection,
  addDoc,
  doc,
  getDocs,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);

  const generarOrden = (buyer) => {
    const order = {
      buyer: buyer,
      items: cart,
      total: totalCompra(),
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);

    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((el) => el.id)
      )
    );

    const outOfStock = [];

    getDocs(q).then((res) => {
      res.docs.forEach((doc) => {
        const itemToUpdate = cart.find((prod) => prod.id === doc.id);

        if (doc.data().stock >= itemToUpdate.cantidad) {
          batch.update(doc.ref, {
            stock: doc.data().stock - itemToUpdate.cantidad,
          });
        } else {
          outOfStock.push(itemToUpdate);
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        addDoc(ordersRef, order).then((res) => {
          setOrderId(res.id);
          vaciarCarrito();
        });
      } else {
        alert("Hay items sin stock");
      }
    });
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length > 4 && values.email.length > 5) {
      generarOrden(values);
    } else {
      alert("Campos inválidos");
    }
  };

  return (
    <div className="container my-5">
      {orderId ? (
        <>
          <h2>Gracias por su compra!</h2>
          <p>Su número de compra es: {orderId}</p>

          <Link to="/" className="btn btn-primary">
            Volver
          </Link>
        </>
      ) : (
        <>
          <h2>Resumen de compra</h2>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              value={values.nombre}
              onChange={handleInputChange}
              name="nombre"
              className="form-control my-2"
              placeholder="Nombre y apellido"
              type="text"
            />
            <input
              value={values.email}
              onChange={handleInputChange}
              name="email"
              className="form-control my-2"
              placeholder="Email"
              type="email"
            />
            <input
              value={values.tel}
              onChange={handleInputChange}
              name="tel"
              className="form-control my-2"
              placeholder="Teléfono"
              type="tel"
            />

            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
  );
};
