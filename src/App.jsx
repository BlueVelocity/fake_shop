import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";

function App({ page }) {

  return (
    <div class={styles.app}>
      <NavBar />
      {page}
    </div>
  )
}

export default App
