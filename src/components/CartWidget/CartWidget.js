import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <BsFillCartFill />
    </div>
  );
};
