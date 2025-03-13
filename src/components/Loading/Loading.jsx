import { useState } from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div class={styles.loading}>
      <span class={styles.text}>Loading...</span>
    </div>
  )
}
