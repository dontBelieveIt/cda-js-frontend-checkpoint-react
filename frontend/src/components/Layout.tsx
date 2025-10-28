import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import "../main.scss"; 
import { Footer } from "./Footer";

export function PageLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
