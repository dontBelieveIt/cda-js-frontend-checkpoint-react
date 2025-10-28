import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import "../main.scss"; 
import { Footer } from "./Footer";

export function PageLayout() {
  return (
    <body>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
}
