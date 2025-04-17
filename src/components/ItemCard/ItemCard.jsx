import { useEffect, useState } from "react";
import styles from "./ItemCard.module.css";
import { useCart } from "../../context/CartContext";

export default function ItemCard({ imgUrl, name, desc, price }) {
  const [qty, setQty] = useState(0);
  const { cartContents, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const itemData = cartContents.find(item => item.name === name);
    setQty(itemData ? itemData.qty : 0);
  }, [cartContents, name]);

  function incQntyHandler() {
    setQty(qty + 1);
    addToCart({ imgUrl, name, price });
  }

  function decQntyHandler() {
    if (qty > 0) {
      setQty(qty - 1);
      removeFromCart({ imgUrl, name, price });
    }
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.contentContainer}>
        <a className={styles.imgContainer} href={imgUrl} target="_blank" rel="noopener norefferer"><img src={imgUrl} alt="" /></a>
        <div className={styles.itemInfo}>
          <span className={styles.name}>{name}</span>
          <span className={styles.desc}>{desc}</span>
          <span className={styles.price}>${price.toFixed(2)}</span>
        </div>
        <div className={styles.selection}>
          <div className={styles.quantity}>
            <button 
              aria-label="decrement" 
              className={qty === 0 ? styles.disabled : ""} 
              onClick={qty === 0 ? undefined : decQntyHandler}
            >
              -
            </button>
            <span aria-label="quantity">{qty}</span>
            <button aria-label="increment" onClick={incQntyHandler}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
