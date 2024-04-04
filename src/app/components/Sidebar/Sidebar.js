"use client";
import { useAppContext } from "@/app/context";
import { useResize } from "@/app/helpers/useResize";
import { usePathname } from "next/navigation";

import Logo from "@/app/components/Logo/Logo";
import ListItem from "@/app/components/Sidebar/ListItem";
import Profile from "@/app/components/Sidebar/Profile";
import DiscountShape from "@/app/components/Sidebar/menu-svg/DiscountShape";
import KeySquare from "@/app/components/Sidebar/menu-svg/KeySquare";
import MessageQuestion from "@/app/components/Sidebar/menu-svg/MessageQuestion";
import Square from "@/app/components/Sidebar/menu-svg/Square";
import UserSquare from "@/app/components/Sidebar/menu-svg/UserSquare";
import WalletMoney from "@/app/components/Sidebar/menu-svg/WalletMoney";
import styles from "@/app/components/Sidebar/sidebar.module.scss";

export default function Sidebar() {
  const { isOpenSidebar, setIsOpenSidebar } = useAppContext();
  const [width] = useResize();
  const pathname = usePathname();

  return (
    <>
      <div
        className={styles.sidebar}
        style={{
          ...(!isOpenSidebar &&
            width <= 1024 && {
              position: "fixed",
              top: "0",
              left: "0",
            }),
        }}
      >
        <div>
          <div className={styles.sidebar__top}>
            <Logo></Logo>
            <div
              className={styles.sidebar__close}
              onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            >
              <img src="./images/close.png" alt="close"></img>
            </div>
          </div>
          <ul className={styles.sidebar__list}>
            <ListItem
              href="/"
              svg={<KeySquare />}
              dashboard={true}
              active={pathname == "/" ? true : false}
            >
              Dashboard
            </ListItem>
            <ListItem
              href="/product"
              svg={<Square />}
              active={pathname == "/product" ? true : false}
            >
              Product
            </ListItem>
            <ListItem
              href="/customers"
              svg={<UserSquare />}
              active={pathname == "/customers" ? true : false}
            >
              Customers
            </ListItem>
            <ListItem
              href="/income"
              svg={<WalletMoney />}
              active={pathname == "/income" ? true : false}
            >
              Income
            </ListItem>
            <ListItem
              href="/promote"
              svg={<DiscountShape />}
              active={pathname == "/promote" ? true : false}
            >
              Promote
            </ListItem>
            <ListItem
              href="/help"
              svg={<MessageQuestion />}
              active={pathname == "/help" ? true : false}
            >
              Help
            </ListItem>
          </ul>
        </div>
        <Profile />
      </div>
      <div
        className={styles.substrate}
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        style={{
          ...(!isOpenSidebar &&
            width <= 1024 && {
              display: "flex",
            }),
        }}
      ></div>
    </>
  );
}
