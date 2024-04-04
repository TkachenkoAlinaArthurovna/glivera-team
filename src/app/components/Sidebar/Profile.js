import styles from "@/app/components/Sidebar/sidebar.module.scss";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__photo}>
        <img src="./images/photo_project_manager.png" alt="photo"></img>
      </div>
      <div className={styles.profile__info}>
        <span className={styles.profile__name}>Evano</span>
        <span className={styles.profile__position}>Project Manager</span>
      </div>
    </div>
  );
}
