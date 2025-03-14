import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import NavBar from "../../components/NavBar/NavBar";
import ItemCard from "../../components/ItemCard/ItemCard";
import Loading from "../../components/Loading/Loading";

export default function Shop({ addToCartHandler, removeFromCartHandler, cartContents }) {
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
      <NavBar cartContents={cartContents} />
      {items == null ? <Loading /> :
        <main className={styles.shop}>
          <div>
            <h2>Shop Products</h2>
            <p>Check out our amazing products!</p>
          </div>
          <ul className={styles.items}>
            {items.map((itemData) => <ItemCard key={itemData.name} cartContents={cartContents} addToCartHandler={addToCartHandler}
              removeFromCartHandler={removeFromCartHandler} imgUrl={itemData.image}
              name={itemData.title} desc={itemData.description} price={itemData.price} />)}
          </ul>
        </main>
      }
    </>
  )
}
