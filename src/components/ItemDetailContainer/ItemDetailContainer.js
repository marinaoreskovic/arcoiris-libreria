import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { pedirItem } from "../../helpers/pedirDatos";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  console.log(item);

  useEffect(() => {
    pedirItem(2).then((resp) => setItem(resp));
  }, []);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
