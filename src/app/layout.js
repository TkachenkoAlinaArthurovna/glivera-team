import { Poppins } from "next/font/google";
import "./globals.css";

import Wrapper from "@/app/components/Wrapper/Wrapper";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Content from "@/app/components/Content/Content";
import IconMenu from "@/app/components/IconMenu/IconMenu";

import { AppWrapper } from "@/app/context";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppWrapper>
          <IconMenu />
          <Wrapper>
            <Sidebar></Sidebar>
            <Content>{children}</Content>
          </Wrapper>
        </AppWrapper>
      </body>
    </html>
  );
}
