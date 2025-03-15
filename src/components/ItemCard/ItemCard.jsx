import { useEffect, useState } from "react";
import styles from "./ItemCard.module.css";

export default function ItemCard({ cartContents, addToCartHandler, removeFromCartHandler, imgUrl, name, desc, price }) {
  const [qty, setQty] = useState(0);

  useEffect(() => {
    const itemData = cartContents.length > 0 && cartContents.find(item => item.name == name);

    if (itemData) {
      setQty(itemData.qty);
    }
  }, []);

  function incQntyHandler() {
    setQty(qty + 1);
    addToCartHandler({ imgUrl, name, price, qty })
  }

  function decQntyHandler() {
    qty > 0 && setQty(qty - 1);
    removeFromCartHandler({ imgUrl, name, price, qty });
  }

  return (
    <div key={name} class={styles.itemCard}>
      <div class={styles.contentContainer}>
        <div class={styles.imgContainer}>
          <a href={imgUrl} target="_blank" rel="noopener norefferer"><img src={imgUrl} alt="" /></a>
        </div>
        <div class={styles.itemInfo}>
          <span class={styles.name}>{name}</span>
          <span class={styles.desc}>{desc}</span>
          <span class={styles.price}>${price.toFixed(2)}</span>
        </div>
        <div class={styles.selection}>
          <div class={styles.quantity}>
            <button onClick={decQntyHandler}>-</button>
            <span>{qty}</span>
            <button onClick={incQntyHandler}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
