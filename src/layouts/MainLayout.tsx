import { Toaster } from "react-hot-toast";
import VendorSidebar from "../Component/sidebar/vendorSidebar";
import VendorHeader from "../Component/layout/VendorHeader";


interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="flex">
			<VendorSidebar />
			<div className="flex flex-col flex-1 transition-all duration-300 ease-in-out">
				<Toaster position="top-right" reverseOrder={false} />
                <VendorHeader/>
				<main className="p-6 flex-1 mt-17 bg-[#F6F6F6] h-screen">
					{children}
				</main>
			</div>
		</div>
	);
};

export default MainLayout;
