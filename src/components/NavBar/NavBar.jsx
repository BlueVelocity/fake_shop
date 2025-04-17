import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import styles from "./NavBar.module.css";
import homeIcon from "/home.png";
import bagIcon from "/bag.png";
import shoppingCartIcon from "/shopping-cart.png";

export default function NavBar({ cartContents }) {
  function calcCartQty() {
    return cartContents && cartContents.reduce((acc, itemData) => acc + itemData.qty, 0);
  }

  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.shopNameLink}><h1 className={styles.shopName}>Fake Shop</h1></Link>
      <NavButton icon={homeIcon} alt="Home button" link="/" />
      <NavButton icon={bagIcon} alt="Shop button" link="/shop" />
      <NavButton icon={shoppingCartIcon} alt="Cart button" link="/cart" subScript={calcCartQty()} />
    </header>
  );
}
