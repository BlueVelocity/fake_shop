import styles from "./NavButton.module.css";

export default function NavButton({ icon, alt }) {
  return (
    <button class={styles.button}>
      <img class={styles.img} src={icon} alt={alt} />
    </button>
  )
}
