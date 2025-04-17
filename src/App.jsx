import { useState } from "react";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import github from "/github-mark.svg";
import NavBar from "./components/NavBar/NavBar";

function App() {
  //contains itemData: {imgUrl, name, price, qty}
  const [cartContents, setCartContents] = useState([]);

  const currentYear = new Date().getFullYear();

  function addToCartHandler(itemData) {
    const existingData = cartContents.find(data => data.name == itemData.name);
    if (existingData) {
      existingData.qty += 1;
      setCartContents([...cartContents]);
    } else {
      itemData.qty += 1;
      setCartContents([...cartContents, itemData]);
    }
  }

  function removeFromCartHandler(itemData, removeAll) {
    const existingData = cartContents.find(data => data.name == itemData.name);

    if (existingData) {

      removeAll ? existingData.qty = 0 : existingData.qty -= 1;

      if (existingData.qty == 0) {
        setCartContents(cartContents.filter(item => existingData != item));
      } else {
        setCartContents([...cartContents]);
      }
    }
  }


  return (
    <>
      <NavBar cartContents={cartContents} />
      <main className={styles.app}>
        <Outlet context={{ addToCartHandler, removeFromCartHandler, cartContents }} />
      </main>
      <div className={styles.footer}>
        <a href="https://github.com/BlueVelocity"><img src={github} />Joseph Monighan, {currentYear}</a>
      </div>
    </>
  )
}

export default App
