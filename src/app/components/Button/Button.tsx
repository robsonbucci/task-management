"use client";
import { useGlobalState } from "@/app/context/globalContextProvider";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }
  

export default function Button({ children, ...props }: ButtonProps) {

  const { theme } = useGlobalState();

  return <button {...props} 
  className="py-3 px-8 rounded-[6px] border-0  font-bold text-[16px] pointer"
  style={{ backgroundColor: "blueviolet" }}>{children}</button>;
}
