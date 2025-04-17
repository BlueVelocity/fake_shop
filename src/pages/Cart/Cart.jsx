import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import ItemCheckoutCard from "../../components/ItemCheckoutCard/ItemCheckoutCard";

export default function Cart() {
  const {
    addToCartHandler,
    removeFromCartHandler,
    cartContents
  } = useOutletContext();

  return (
    <>
      <div className={styles.cart}>
        <h2>Checkout</h2>
        <ul className={styles.items}>
          {cartContents.map(item => <ItemCheckoutCard key={item.name} addToCartHandler={addToCartHandler} removeFromCartHandler={removeFromCartHandler} imgUrl={item.imgUrl} name={item.name} price={item.price} qty={item.qty} />)}
          <span className={styles.total}>{cartContents.length > 0 ? "Total: $" + cartContents.reduce((acc, item) => {
            return (acc + (item.price * item.qty))
          }, 0).toFixed(2) : "Buy Something!"}</span>
        </ul>
      </div>
    </>
  )
}
