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
      <div className="profile">
        <div className="profile-overlay">
          <img
            src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
            alt="profile"
            width={70} 
            height={70}
          />
          <h1><span>Profile</span></h1>
        </div>
      </div>
    </nav>
  );
}
