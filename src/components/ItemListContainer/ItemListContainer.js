import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    // crear la referencia a la colección
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;
    // llamamos a esa ref
    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(productos);

        setItems(productos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return <>{loading ? <Loader /> : <ItemList items={items} />}</>;
};
