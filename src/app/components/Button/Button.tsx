"use client";
import { useGlobalState } from "@/app/context/globalContextProvider";
import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

interface ButtonProps extends AntdButtonProps {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {

  return (
    <AntdButton
      {...props}
      className="font-bold text-[16px]"
      size="large"
      type="primary"
      block
    >
      {children}
    </AntdButton>
  );
}
