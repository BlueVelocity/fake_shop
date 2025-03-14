import styles from "./ItemCard.module.css";

export default function ItemCard({ imgUrl, name, desc, price }) {
  return (
    <div class={styles.itemCard}>
      <div class={styles.contentContainer}>
        <div class={styles.imgContainer}>
          <img src={imgUrl} alt="" />
        </div>
        <div class={styles.itemInfo}>
          <span class={styles.name}>{name}</span>
          <span class={styles.desc}>{desc}</span>
          <span class={styles.price}>${price}</span>
        </div>
        <div class={styles.selection}>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
