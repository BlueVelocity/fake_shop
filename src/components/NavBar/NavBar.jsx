import { Link } from "react-router";
import NavButton from "../NavButton/NavButton";
import styles from "./NavBar.module.css";
import homeIcon from "/home.png";
import shoppingCartIcon from "/shopping-cart.png";

export default function NavBar() {
  return (
    <header class={styles.header}>
      <Link to={"/home"} class={styles.shopNameLink}><h1 class={styles.shopName}>Fake Shop</h1></Link>
      <NavButton icon={homeIcon} alt="Home button" link="/home" />
      <NavButton icon={shoppingCartIcon} alt="Checkout button" link="/cart" />
    </header>
  );
}
