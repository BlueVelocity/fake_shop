import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import github from "/github-mark.svg";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./context/CartContext";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <CartProvider>
      <NavBar />
      <main className={styles.app}>
        <Outlet />
      </main>
      <div className={styles.footer}>
        <a href="https://github.com/BlueVelocity"><img src={github} />Joseph Monighan, {currentYear}</a>
      </div>
    </CartProvider>
  );
}

export default App
