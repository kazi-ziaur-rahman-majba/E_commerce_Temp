import { useEffect, useState } from "react";
import { TbTablePlus, TbListDetails, TbLayoutGrid } from "react-icons/tb";
import { BiCube } from "react-icons/bi";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation, NavLink } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { TfiLayoutSlider } from "react-icons/tfi";
import { FaTags } from "react-icons/fa";
import { SiPayloadcms } from "react-icons/si";
import { MdRateReview } from "react-icons/md";
import logo from "../../assets/sm-logo.svg"

const menu = [
	{
		sectionName: "Main",
		items: [
			{
				id: 1,
				name: "Dashboard",
				icon: <TbLayoutGrid />,
				path: "/",
				subItems: [
					{ id: 1, name: "Vendor Dashboard", path: "/vendor-dashboard" },
				],
			},
		],
	},
	{
		sectionName: "Inventory",
		items: [
			{
				id: 2,
				name: "Category",
				icon: <TbListDetails />,
				path: "/main-category",
				subItems: [
					{ id: 1, name: "Main Category", path: "/main-category" },
					{ id: 2, name: "First Category", path: "/first-category" },
					{ id: 3, name: "Second Category", path: "/second-category" },
					{ id: 4, name: "Third Category", path: "/third-category" },
				],
			},
			{
				id: 3,
				name: "Product",
				icon: <BiCube />,
				path: "/vendor-products",
				subItems: [],
			},
			{
				id: 4,
				name: "Create Product",
				icon: <TbTablePlus />,
				path: "/create-vendor-product",
				subItems: [],
			},
		],
	},
	{
		sectionName: "Settings",
		items: [
			{
				id: 6,
				name: "Hero Slider",
				icon: <TfiLayoutSlider />,
				path: "/hero-slider",
				subItems: [],
			},
			{
				id: 7,
				name: "Promotions",
				icon: <FaTags />,
				path: "/promotion",
				subItems: [],
			},
			{
				id: 8,
				name: "Header Footer CMS",
				icon: <SiPayloadcms />,
				path: "/header-footer-cms",
				subItems: [],
			},
			{
				id: 9,
				name: "Reviews",
				icon: <MdRateReview />,
				path: "/review",
				subItems: [],
			},
		],
	},
	
];

const VendorSidebar = () => {
	const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
	const location = useLocation();

	useEffect(() => {
		menu.forEach((section) => {
			section.items.forEach((item) => {
				if (
					item.subItems.some((sub) => sub.path === location.pathname) ||
					item.path === location.pathname
				) {
					setOpenSubMenu(item.id);
				}
			});
		});
	}, [location.pathname]);

	const toggleSubMenu = (id: number) => {
		setOpenSubMenu(openSubMenu === id ? null : id);
	};

	const isAnySubmenuActive = menu.some(section =>
		section.items.some(menuItem =>
			menuItem.subItems.some(subItem => subItem.path === location.pathname)
		)
	);

	return (
		<div className="hidden lg:block w-63 min-h-screen bg-white shadow-md p-2 transition-all ease-in duration-300 border-r border-gray-200">
			<Link to={"/"}>
				<img
					src={logo}
					alt="company logo"
					className="w-48 fixed"
				/>
			</Link>

			<div className="p-2 mt-14 max-h-[90vh] fixed w-61 overflow-hidden border-t border-gray-200 hover:overflow-y-auto custom-scrollbar">
				{menu.map((section) => (
					<div key={section.sectionName} className="p-2 mb-2">
						<p className="text-[12px] text-[#092c4c] font-bold mb-2">
							{section.sectionName}
						</p>

						{section.items.map((item) => {
							const isParentActive = item.subItems.some(
								(subItem) => subItem.path === location.pathname
							);
							const isItemActive = item.path === location.pathname;
							const isOpen = openSubMenu === item.id;

							const shouldShowActive = item.subItems.length > 0
								? (isOpen || isParentActive)
								: (isItemActive && !isAnySubmenuActive);

							return (
								<div key={item.id}>
									<NavLink
										to={item.subItems.length > 0 ? "#" : item.path}
										className={`w-[200px] group px-[12px] py-[8px] flex items-center justify-between cursor-pointer rounded-md transition-all mb-[2px] 
											${shouldShowActive
												? "bg-[var(--color-active)] text-[var(--color-primary)]"
												: "hover:bg-gray-100"
											}`}
										onClick={() => toggleSubMenu(item.id)}
									>
										<div className="flex items-center gap-2">
											<span
												className={`text-[18px] transition-all ${shouldShowActive
													? "text-[var(--color-primary)]"
													: "text-[#5b6670] group-hover:text-[var(--color-primary)]"
													}`}
											>
												{item.icon}
											</span>
											<span
												className={`text-[14px] font-medium transition-all ${shouldShowActive
													? "text-[var(--color-primary)]"
													: "text-[#5b6670] group-hover:text-[var(--color-primary)]"
													}`}
											>
												{item.name}
											</span>
										</div>

										{item.subItems.length > 0 && (
											<span className="text-xl bg-gray-100 rounded-full">
												{isOpen ? (
													<RiArrowDropDownLine className="text-[var(--color-primary)]" />
												) : (
													<RiArrowDropRightLine className="text-gray-600" />
												)}
											</span>
										)}
									</NavLink>

									{item.subItems.length > 0 && isOpen && (
										<ul>
											{item.subItems.map((subItem) => (
												<NavLink
													key={subItem.id}
													to={subItem.path}
													className={({ isActive }) =>
														`block w-[200px] rounded-md group pl-4 py-2.5 p-2 cursor-pointer text-[13px] transition-all 
														hover:bg-gray-100 hover:text-[var(--color-primary)] 
														${isActive ? "text-[var(--color-primary)] font-medium" : "text-[#646b72]"}`
													}
												>
													<span className="flex justify-start items-center gap-2">
														<GoDotFill className="text-[10px]" />
														{subItem.name}
													</span>
												</NavLink>
											))}
										</ul>
									)}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default VendorSidebar;
