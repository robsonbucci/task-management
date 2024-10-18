"use client";
import React, { createContext, useContext, useState } from "react";
import themes from "./themes";

const GlobalContext = createContext();
const GlobalUpdateContext = createContext();

export function GlobalContextProvider({ children }) {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
