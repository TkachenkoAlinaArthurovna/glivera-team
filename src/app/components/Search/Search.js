import styles from "@/app/components/Search/search.module.scss";

export default function Search() {
  return (
    <div className={styles.search}>
      <img src="./images/search.png" alt="search"></img>
      <input type="text" placeholder="Search"></input>
    </div>
  );
}
