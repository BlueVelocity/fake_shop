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
            <button className={qty === 0 ? styles.disabled : ""} onClick={qty === 0 ? undefined : decQntyHandler}>-</button>
            <span>{qty}</span>
            <button onClick={incQntyHandler}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
