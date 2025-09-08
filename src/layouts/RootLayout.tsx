import { Outlet } from "react-router-dom";
import NavBar from "../Component/layout/navbar/index";
import Footer from "../Component/layout/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
    return (
        <div className="bg-[#FAF9F6]">
            <NavBar />
            <Toaster position="top-right" reverseOrder={false} />
            <main className="min-h-screen mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;

