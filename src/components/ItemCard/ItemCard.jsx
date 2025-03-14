import { useState } from "react";
import styles from "./ItemCard.module.css";

export default function ItemCard({ addToCartHandler, imgUrl, name, desc, price }) {
  const [qty, setQty] = useState(1);

  function incQntyHandler() {
    setQty(qty + 1);
  }

  function decQntyHandler() {
    qty > 0 && setQty(qty - 1);
  }

  function cartHandler() {
    setQty(1);
  }

  return (
    <div class={styles.itemCard}>
      <div class={styles.contentContainer}>
        <div class={styles.imgContainer}>
          <a href={imgUrl} target="_blank" rel="noopener norefferer"><img src={imgUrl} alt="" /></a>
        </div>
        <div class={styles.itemInfo}>
          <span class={styles.name}>{name}</span>
          <span class={styles.desc}>{desc}</span>
          <span class={styles.price}>${price}</span>
        </div>
        <div class={styles.selection}>
          <div class={styles.quantity}>
            <button onClick={decQntyHandler}>-</button>
            <span>{qty}</span>
            <button onClick={incQntyHandler}>+</button>
          </div>
          <button class={styles.addToCart} onClick={cartHandler}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
