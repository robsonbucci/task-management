import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function GlobalStyleProviders({ children }: Props) {
  return <div className="flex gap-10 p-10 h-full">{children}</div>;
}
