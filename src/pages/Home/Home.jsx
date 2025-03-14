import { Link } from "react-router";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";

export default function Home({cartContents}) {
  return (
    <>
      <NavBar cartContents={cartContents}/>
      <main class={styles.topPane}>
        <span class={styles.text}>Welcome to Fake Shop</span>
        <span class={styles.subText}>Discover amazing products at unbeatable prices!</span>
        <Link to="/shop"><button class={styles.button}>Shop Now!</button></Link>
      </main>
    </>
  )
}
