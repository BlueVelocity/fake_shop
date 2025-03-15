import { useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";

function App() {
  //contains itemData: {imgUrl, name, price, qty}
  const [cartContents, setCartContents] = useState([]);

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

  function removeFromCartHandler(itemData) {
    const existingData = cartContents.find(data => data.name == itemData.name);
    if (existingData) {
      existingData.qty -= 1;
      if (existingData.qty == 0) {
        setCartContents(cartContents.filter(item => existingData != item));
      } else {
        setCartContents([...cartContents]);
      }
    }
  }

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home cartContents={cartContents} />}></Route>
          <Route path="/shop" element={<Shop addToCartHandler={addToCartHandler} removeFromCartHandler={removeFromCartHandler} cartContents={cartContents} />}></Route>
          <Route path="/cart" element={<Cart cartContents={cartContents} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
