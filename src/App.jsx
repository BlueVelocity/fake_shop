import { useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  const [cartContents, setCartContents] = useState([]);

  function addToCartHandler() {

  }

  return (
    <div class={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
