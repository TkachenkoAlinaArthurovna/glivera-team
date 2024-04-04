import CustomersList from "@/app/components/CustomersPage/CustomersList";
import Pagination from "@/app/components/CustomersPage/Pagination";
import styles from "@/app/components/CustomersPage/customersPage.module.scss";
import Search from "@/app/components/Search/Search";

export default function CustomersPage() {
  return (
    <div className={styles.customers}>
      <div className={styles.customers__greeting}>
        Hello <span>Evano</span> 👋🏼,
      </div>
      <div className={styles.customers__content}>
        <div className={styles.customers__title}>All Customers</div>
        <div className={styles.customers__subtitle}>Active Members</div>
        <Search />
        <CustomersList />
        <Pagination />
      </div>
    </div>
  );
}
