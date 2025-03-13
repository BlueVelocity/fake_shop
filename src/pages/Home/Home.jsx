import { Link } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div class={styles.topPane}>
        <span class={styles.text}>Welcome to Fake Shop</span>
        <span class={styles.subText}>Discover amazing products at unbeatable prices!</span>
        <Link to="/shop"><button class={styles.button}>Shop Now!</button></Link>
      </div>
    </>
  )
}
