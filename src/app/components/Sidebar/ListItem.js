import Link from "next/link";
import { useAppContext } from "@/app/context";

import styles from "@/app/components/Sidebar/sidebar.module.scss";
import Arrow from "@/app/components/Sidebar/menu-svg/Arrow";

export default function ListItem({ href, svg, children, dashboard, active }) {
  const { isOpenSidebar, setIsOpenSidebar } = useAppContext();

  return (
    <li
      className={`${styles.sidebar__item} ${active && styles.active}`}
      onClick={() => setIsOpenSidebar(!isOpenSidebar)}
    >
      <Link
        href={href}
        className={`${styles.sidebar__link} ${active && styles.active}`}
      >
        <div className={styles.sidebar__icon}>{svg}</div>
        {children}
        {!dashboard && (
          <div className={styles.sidebar__arrow}>
            <Arrow />
          </div>
        )}
      </Link>
    </li>
  );
}
