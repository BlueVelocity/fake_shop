import NavButton from "../NavButton/NavButton";
import styles from "./NavBar.module.css";
import burgerBarIcon from "/burger-bar.png";
import homeIcon from "/home.png";
import shoppingCartIcon from "/shopping-cart.png";

export default function NavBar() {
  return (
    <header class={styles.header}>
      <h1 class={styles.shopName}>Fake Shop</h1>
      <NavButton icon={homeIcon} alt="Home button" />
      <NavButton icon={shoppingCartIcon} alt="Checkout button" />
      <NavButton icon={burgerBarIcon} alt="Expandable burger menu button" />
    </header>
  );
}
