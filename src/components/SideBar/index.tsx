import { type ReactNode } from "react";
import '@components/SideBar/style.css';
import { Home, BarChart, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Logo } from "@components/Logo";

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
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo/>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
