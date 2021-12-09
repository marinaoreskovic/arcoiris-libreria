import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span>{totalCantidad()}</span>
    </div>
  );
};
