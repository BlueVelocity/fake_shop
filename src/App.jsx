import { BrowserRouter, Routes, Route } from "react-router";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {

  return (
    <div class={styles.main}>
      <NavBar />

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
