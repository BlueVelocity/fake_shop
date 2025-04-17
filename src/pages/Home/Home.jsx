import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import sparkle from "/sparkle.png";
import crown from "/crown.png";
import money from "/money.png";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.topPane}>
          <span className={styles.text}>Welcome to Fake Shop</span>
          <span className={styles.subText}>Discover amazing products at unbeatable prices!</span>
          <Link to="/shop"><button className={styles.button}>Shop Now!</button></Link>
        </div>
        <div className={styles.theSell}>
          <Link to="/shop">
            <img src={sparkle} alt="Sparkle" />
            <span>Treat yourself!</span>
          </Link>
          <Link to="/shop">
            <img src={crown} alt="Crown" />
            <span>Spoil that special someone!</span>
          </Link>
          <Link to="/shop">
            <img src={money} alt="Money" />
            <span>Buy Buy Buy!</span>
          </Link>
        </div>
      </main>
    </>
  )
}
