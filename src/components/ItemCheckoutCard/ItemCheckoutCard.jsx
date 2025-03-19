import styles from "./ItemCheckoutCard.module.css";

export default function ItemCheckoutCard({ addToCartHandler, removeFromCartHandler, imgUrl, name, price, qty }) {

  function addItemHandler() {
    //passed itemData: {imgUrl, name, price, qty}. I should have used Typescript
    addToCartHandler({ imgUrl, name, price, qty });
  }

  function removeItemHandler() {
    //passed itemData: {imgUrl, name, price, qty}. I should have used Typescript
    removeFromCartHandler({ imgUrl, name, price, qty });
  }

  function removeAllItemHandler() {
    //passed itemData: {imgUrl, name, price, qty}. I should have used Typescript
    removeFromCartHandler({ imgUrl, name, price, qty }, true);
  }

  return (
    <li className={styles.card}>
      <img src={imgUrl} alt={name} />
      <span className={styles.itemName}>{name}</span>
      <span className={styles.price}>
        <span aria-label={`Price: ${price}`}>${price}</span>
        <span aria-label={`Quantity: ${qty}`}>x {qty}</span>
        <div className={styles.buttons}>
          <button aria-label="decrement" onClick={removeItemHandler}> - </button>
          <button aria-label="increment" className={styles.addButton} onClick={addItemHandler}> + </button>
        </div>
        <button aria-label="remove this item" className={styles.removeAll} onClick={removeAllItemHandler}>Remove All</button>
      </span>
      <span className={styles.price}>${(price * qty).toFixed(2)}</span>
    </li>
  )
}
