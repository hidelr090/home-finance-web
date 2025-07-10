import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div style={{ display: "flex" }}>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
