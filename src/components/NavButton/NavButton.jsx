import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

export default function NavButton({ icon, alt, link, subScript }) {
  return (
    <Link to={link}>
      <button className={styles.button}>
        <img className={styles.img} src={icon} alt={alt} />
        {subScript > 0 && <span className={styles.subScript}>{subScript}</span>}
      </button>
    </Link>
  )
}
