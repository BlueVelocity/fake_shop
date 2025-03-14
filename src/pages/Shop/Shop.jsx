import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import NavBar from "../../components/NavBar/NavBar";
import ItemCard from "../../components/ItemCard/ItemCard";
import Loading from "../../components/Loading/Loading";

export default function Shop({ addToCartHandler }) {
  const [items, setItems] = useState(null);

  useEffect(() => {

    async function getStoreData() {
      const data = await fetch("https://fakestoreapi.com/products");
      const itemData = await data.json();

      setItems(itemData);
    }

    getStoreData();

  }, []);

  return (
    <>
      <NavBar />
      {items == null ? <Loading /> :
        <main class={styles.shop}>
          <div>
            <h2>Shop Products</h2>
            <p>Check out our amazing products!</p>
          </div>
          <div class={styles.items}>
            {items.map((itemData) => <ItemCard addToCartHandler={addToCartHandler} imgUrl={itemData.image} name={itemData.title} desc={itemData.description} price={itemData.price} />)}
          </div>
        </main>
      }
    </>
  )
}
