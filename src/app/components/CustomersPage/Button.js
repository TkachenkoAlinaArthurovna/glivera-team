import styles from "@/app/components/CustomersPage/customersPage.module.scss";

export default function Button({ status, setStatus, id }) {
  return (
    <>
      {status == true ? (
        <button
          className={`${styles.customers__button} ${styles.customers__active}`}
          onClick={() => {
            setStatus((prev) => {
              return { ...prev, [`status${id}`]: !status };
            });
          }}
        >
          Active
        </button>
      ) : (
        <button
          className={`${styles.customers__button} ${styles.customers__inactive}`}
          onClick={() => {
            setStatus((prev) => {
              return { ...prev, [`status${id}`]: !status };
            });
          }}
        >
          Inactive
        </button>
      )}
    </>
  );
}
