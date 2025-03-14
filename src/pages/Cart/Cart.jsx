import styles from "./Cart.module.css";
import NavBar from "../../components/NavBar/NavBar";
import ItemCheckoutCard from "../../components/ItemCheckoutCard/ItemCheckoutCard";

export default function Cart({cartContents}) {
  return(
    <>
      <NavBar cartContents={cartContents} />
      <div class={styles.cart}>
        <ul class={styles.items}>
          {cartContents.map(item => <ItemCheckoutCard imgUrl={item.imgUrl} name={item.name} price={item.price} qty={item.qty} />)}
          <span class={styles.total}>Total: {cartContents.length > 0 && cartContents.reduce( (acc, item) => {
            return (acc + (item.price * item.qty))
          }, 0).toFixed(2)}</span>
        </ul>
      </div>
    </>
  )
}