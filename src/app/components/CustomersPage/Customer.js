import Button from "@/app/components/CustomersPage/Button";
import styles from "@/app/components/CustomersPage/customersPage.module.scss";

export default function Customer({
  name,
  company,
  phone,
  email,
  country,
  status,
  setStatus,
  id,
}) {
  return (
    <div className={styles.customers__customer}>
      <div>
        <span>Customer Name : </span>
        {name}
      </div>
      <div>
        <span>Company : </span>
        {company}
      </div>
      <div>
        <span>Phone Number : </span>
        {phone}
      </div>
      <div>
        <span>Email : </span>
        {email}
      </div>
      <div>
        <span>Country : </span>
        {country}
      </div>
      <div>
        <Button status={status} setStatus={setStatus} id={id} />
      </div>
    </div>
  );
}
