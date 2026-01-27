import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";

export default function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
