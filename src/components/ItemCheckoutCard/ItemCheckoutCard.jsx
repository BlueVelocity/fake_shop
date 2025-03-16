import styles from "./ItemCheckoutCard.module.css";

export default function ItemCheckoutCard({ imgUrl, name, price, qty }) {
  return (
    <li className={styles.card}>
      <img src={imgUrl} alt={name} />
      <span className={styles.itemName}>{name}</span>
      <span className={styles.price}><span>${price}</span> <span>x {qty}</span><button> - </button></span>
      <span className={styles.price}>${(price * qty).toFixed(2)}</span>
    </li>
  )
}
