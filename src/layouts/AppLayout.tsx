import Sidebar from "@components/SideBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: 240, padding: "2rem", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
