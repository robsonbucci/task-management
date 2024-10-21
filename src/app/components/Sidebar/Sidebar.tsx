"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GetProp, Menu, MenuProps } from "antd";
import {
  CalendarOutlined,
  MailOutlined,
  CheckOutlined,
} from "@ant-design/icons";

type MenuItem = GetProp<MenuProps, "items">[number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <MailOutlined />,
    label: <Link href="/">Tarefas</Link>,
  },
  {
    key: "2",
    icon: <CalendarOutlined />,
    label: "Concluídos",
  },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideSidebar = pathname === "/login" || pathname === "/cadastro";
  return (
    <div className="flex h-screen">
      {/* Renderiza o Menu apenas se não estiver nas rotas /login ou /cadastro */}
      {!hideSidebar && (
        <Menu
          style={{ width: 256, height: "100vh" }}
          defaultSelectedKeys={["1"]}
          mode="vertical"
          theme="dark"
          items={items}
        />
      )}
      <div style={{ padding: "20px", flex: 1 }}>{children}</div>
    </div>
  );
}
