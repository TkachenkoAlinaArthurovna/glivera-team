"use client";

import { useAppContext } from "@/app/context";
import { useEffect } from "react";

import styles from "@/app/components/IconMenu/iconMenu.module.scss";
import Logo from "@/app/components/Logo/Logo";

export default function IconMenu() {
  const { isOpenSidebar, setIsOpenSidebar } = useAppContext();

  useEffect(() => {
    console.log(isOpenSidebar);
    if (!isOpenSidebar) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "100%";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenSidebar]);

  return (
    <div className={styles.menu}>
      <Logo></Logo>
      <div
        className={styles.menu__icon}
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
      >
        <img src="./images/menu.png" alt="menu"></img>
      </div>
    </div>
  );
}
