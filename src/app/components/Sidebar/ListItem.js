import Link from "next/link";
import { useAppContext } from "@/app/context";
import { useResize } from "@/app/helpers/useResize";

import styles from "@/app/components/Sidebar/sidebar.module.scss";
import Arrow from "@/app/components/Sidebar/menu-svg/Arrow";

export default function ListItem({ href, svg, children, dashboard, active }) {
  const { isOpenSidebar, setIsOpenSidebar } = useAppContext();
  const [width] = useResize();

  return (
    <li
      className={`${styles.sidebar__item} ${active && styles.active}`}
      onClick={
        width < 1024 ? () => setIsOpenSidebar(!isOpenSidebar) : undefined
      }
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
