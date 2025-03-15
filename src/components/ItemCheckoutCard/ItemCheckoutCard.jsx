import styles from "./ItemCheckoutCard.module.css";

export default function ItemCheckoutCard({ imgUrl, name, price, qty }) {
  return (
    <li className={styles.card}>
      <img src={imgUrl} alt={name} />
      <span>{name}</span>
      <span className={styles.price}>${price} x {qty}</span>
      <span className={styles.price}>${(price * qty).toFixed(2)}</span>
    </li>
  )
}
