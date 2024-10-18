"use client";
import { useGlobalState } from "@/app/context/globalContextProvider";

interface Props {
  children: React.ReactNode;
  title: string;
}
export default function LoginCard({ title, children }: Props) {
  const { theme } = useGlobalState();
  return (
    <div
      className="items-center justify-center m-auto w-[400px] p-5 rounded-[10px]"
      style={{ backgroundColor: theme.colorBg2, color: theme.colorFontPrimary }}
    >
      <h2 className="text-center block mb-5 text-2xl font-bold"> {title} </h2>
      {children}
    </div>
  );
}
