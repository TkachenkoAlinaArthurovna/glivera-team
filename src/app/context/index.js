"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  return (
    <AppContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
