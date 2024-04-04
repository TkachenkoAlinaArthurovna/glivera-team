"use client";

import styles from "@/app/components/Content/content.module.scss";

export default function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}
