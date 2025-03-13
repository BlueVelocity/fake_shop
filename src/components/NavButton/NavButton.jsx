import { Link } from "react-router";
import styles from "./NavButton.module.css";

export default function NavButton({ icon, alt, link }) {
  return (
    <Link to={link}>
      <button class={styles.button}>
        <img class={styles.img} src={icon} alt={alt} />
      </button>
    </Link>
  )
}
