import Header from "@/components/header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with Love by Abhijit
      </div>
    </div>
  );
}

export default AppLayout;
