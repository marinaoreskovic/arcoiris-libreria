import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { pedirItem } from "../../helpers/pedirDatos";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  console.log(item);

  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirItem(Number(itemId))
      .then((resp) => setItem(resp))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <div>{loading ? <h2>Cargando</h2> : <ItemDetail item={item} />}</div>;
};
