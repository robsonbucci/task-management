"use client";
import React from "react";
import { GlobalContextProvider } from "@/app/context/globalContextProvider";

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
