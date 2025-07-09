import { type ReactNode, useState } from "react";
import { Home, BarChart, Settings, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Logo } from "@components/Logo";
import "@components/SideBar/style.css";

type NavItem = {
  icon: ReactNode;
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { icon: <Home />, label: "Início", to: "/" },
  { icon: <BarChart />, label: "Relatórios", to: "/reports" },
  { icon: <Settings />, label: "Configurações", to: "/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Logo />
        </div>

        <nav className="sidebar-nav">
          {navItems.map(({ icon, label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
