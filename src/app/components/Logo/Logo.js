import styles from "@/app/components/Logo/logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__img}>
        <img src="./images/logo.png" alt="logo"></img>
      </div>
      <div className={styles.logo__name}>
        Dashboard<span>v.01</span>
      </div>
    </div>
  );
}
