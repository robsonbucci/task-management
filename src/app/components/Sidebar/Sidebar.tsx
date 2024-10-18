"use client";
import { useGlobalState } from "@/app/context/globalContextProvider";
import React from "react";

export default function Sidebar() {
  const { theme } = useGlobalState();

  return (
    <nav
      className="relative"
      style={{
        width: theme.sidebarWidth,
        backgroundColor: theme.colorBg2,
        border: `2px solid ${theme.boderColor2}`,
        borderRadius: "1rem"
      }}
    >
      sidebar
    </nav>
  );
}
