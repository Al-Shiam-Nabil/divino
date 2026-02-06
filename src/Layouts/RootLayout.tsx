import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/UI/Footer";

export default function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
