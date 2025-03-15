import { useState } from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <span className={styles.text}>Loading...</span>
    </div>
  )
}
