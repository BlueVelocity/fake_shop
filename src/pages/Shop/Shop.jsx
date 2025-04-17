import { useState, useEffect } from "react";
import styles from "./Shop.module.css";
import ItemCard from "../../components/ItemCard/ItemCard";
import { useCart } from "../../context/CartContext";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <div role="error">Error loading items</div>;
  }

  return (
    <div className={styles.shop}>
      <div>
        <h2>Shop</h2>
        <p>Browse our selection of items</p>
      </div>
      <ul className={styles.items}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            imgUrl={item.image}
            name={item.title}
            price={item.price}
            addToCartHandler={addToCart}
          />
        ))}
      </ul>
    </div>
  );
}
