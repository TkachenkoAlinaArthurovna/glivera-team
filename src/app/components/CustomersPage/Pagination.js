import styles from "@/app/components/CustomersPage/customersPage.module.scss";

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <div>Showing data 1 to 8 of 256K entries</div>
      <div className={styles.pagination__pages}>
        <div>&lt;</div>
        <div className={styles.pagination__active}>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>...</div>
        <div>40</div>
        <div>&gt;</div>
      </div>
    </div>
  );
}
