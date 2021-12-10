import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { pedirItem } from "../../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
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

  return <>{loading ? <Loader /> : <ItemDetail item={item} />}</>;
};
