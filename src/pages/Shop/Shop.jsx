import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";
import ItemCard from "../../components/ItemCard/ItemCard";
import Loading from "../../components/Loading/Loading";

export default function Shop() {
  const {
    addToCartHandler,
    removeFromCartHandler,
    cartContents
  } = useOutletContext();

  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function getStoreData() {
      try {
        // must have { imgUrl, name, price, qty }
        const data = await fetch("https://fakestoreapi.com/products");
        const itemData = await data.json();

        setItems(itemData);
      } catch (err) {
        setError("Error: Something went wrong!");
      }
    }

    getStoreData();

  }, []);

  return (
    <>
      {(() => {
        if (error) {
          return <span role="error">{error}</span>
        } else if (items == null) {
          return <Loading />
        } else {
          return (
            <main className={styles.shop}>
              <div>
                <h2>Shop Products</h2>
                <p>Check out our amazing products!</p>
              </div>
              {
                cartContents ?
                  <ul className={styles.items}>
                    {items.map((itemData) => <ItemCard key={itemData.title} cartContents={cartContents} addToCartHandler={addToCartHandler}
                      removeFromCartHandler={removeFromCartHandler} imgUrl={itemData.image}
                      name={itemData.title} desc={itemData.description} price={itemData.price} />)}
                  </ul>
                  : <span role="error">{error}</span>
              }
            </main>
          )
        }
      })()}
    </>
  )
}
