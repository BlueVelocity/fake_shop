import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import ItemCard from "../../components/ItemCard/ItemCard";
import Loading from "../../components/Loading/Loading";

export default function Shop() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setItems(["test", "test", "test", "test", "test", "test", "test", "test", "test",])
    }, 1000);

  }, []);

  return (
    <>
      {items == null ? <Loading /> :
        <main class={styles.shop}>
          {items.map((item) => <ItemCard item={item} />)}
        </main>
      }
    </>
  )
}
