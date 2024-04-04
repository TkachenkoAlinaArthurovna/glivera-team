import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Glivera-Team",
  description: "",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Dashboard</div>
    </main>
  );
}
