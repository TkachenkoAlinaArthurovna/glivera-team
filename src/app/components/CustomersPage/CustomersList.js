"use client";

import { useState } from "react";
import Customer from "@/app/components/CustomersPage/Customer";
import styles from "@/app/components/CustomersPage/customersPage.module.scss";

export default function CustomersList() {
  const [status, setStatus] = useState({
    status1: true,
    status2: false,
    status3: false,
    status4: true,
    status5: true,
    status6: true,
    status7: true,
    status8: false,
  });
  return (
    <div className={styles.customers__list}>
      <div className={styles.customers__header}>
        <div>Customer Name</div>
        <div>Company</div>
        <div>Phone Number</div>
        <div>Email</div>
        <div>Country</div>
        <div>Status</div>
      </div>
      <div className={styles.customers__line}></div>
      <div className={styles.customers__items}>
        <Customer
          name="Jane Cooper"
          company="Microsoft"
          phone="(225) 555-0118"
          email="jane@microsoft.com"
          country="United States"
          status={status.status1}
          setStatus={setStatus}
          id="1"
        />
        <Customer
          name="Floyd Miles"
          company="Yahoo"
          phone="(205) 555-0100"
          email="floyd@yahoo.com"
          country="Kiribati"
          status={status.status2}
          setStatus={setStatus}
          id="2"
        />
        <Customer
          name="Ronald Richards"
          company="Adobe"
          phone="(302) 555-0107"
          email="ronald@adobe.com"
          country="Israel"
          status={status.status3}
          setStatus={setStatus}
          id="3"
        />
        <Customer
          name="Marvin McKinney"
          company="Tesla"
          phone="(252) 555-0126"
          email="marvin@tesla.com"
          country="Iran"
          status={status.status4}
          setStatus={setStatus}
          id="4"
        />
        <Customer
          name="Jerome Bell"
          company="Google"
          phone="(629) 555-0129"
          email="jerome@google.com"
          country="Réunion"
          status={status.status5}
          setStatus={setStatus}
          id="5"
        />
        <Customer
          name="Kathryn Murphy"
          company="Microsoft"
          phone="(406) 555-0120"
          email="kathryn@microsoft.com"
          country="Curaçao"
          status={status.status6}
          setStatus={setStatus}
          id="6"
        />
        <Customer
          name="Jacob Jones"
          company="Yahoo"
          phone="(208) 555-0112"
          email="jacob@yahoo.com"
          country="Brazil"
          status={status.status7}
          setStatus={setStatus}
          id="7"
        />
        <Customer
          name="Kristin Watson"
          company="Facebook"
          phone="(704) 555-0127"
          email="kristin@facebook.com"
          country="Åland Islands"
          status={status.status8}
          setStatus={setStatus}
          id="8"
        />
      </div>
    </div>
  );
}
