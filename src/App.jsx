import { useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  //contains itemData: {imgUrl, name, price, qty}
  const [cartContents, setCartContents] = useState([]);

  function addToCartHandler(itemData) {
    const existingData = cartContents.find(data => data.name == itemData.name);
    if (existingData) {
      existingData.qty += itemData.qty;
      setCartContents([...cartContents]);
    } else {
      setCartContents([...cartContents, itemData]);
    }
  }

  return (
    <div class={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home cartContents={cartContents} />}></Route>
          <Route path="/shop" element={<Shop addToCartHandler={addToCartHandler} cartContents={cartContents} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
