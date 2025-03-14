import styles from "./ItemCard.module.css";

export default function ItemCard({ imgUrl, name, desc, price }) {
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
            <button>-</button>
            <input type="number" defaultValue="1" min="0" />
            <button>+</button>
          </div>
          <button class={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
