import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

interface ChildSubCategory {
    name: string;
    link?: string;
}

interface SubCategory {
    name: string;
    link?: string;
    "child-subcategories"?: ChildSubCategory[];
}

interface Category {
    name: string;
    link?: string;
    subcategories: SubCategory[];
}

const NAV_LINKS = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Shop" },
    { path: "/contact", label: "Product" },
    { path: "/blog", label: "Pages" },
    { path: "/faq", label: "About" },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const [activeSubCategory, setActiveSubCategory] = useState<number | null>(null);
    const [menuCategories, setMenuCategories] = useState<Category[]>([]);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
                setActiveCategory(null);
                setActiveSubCategory(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getMenuCategories = async () => {
        try {
            const res = await axios.get<Category[]>("./menuCategories.json");
            setMenuCategories(res.data);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log("An error occurred");
            }
        }
    };

    useEffect(() => {
        getMenuCategories();
        handleScroll();
    }, []);

    const handleCategoryClick = (idx: number, e: React.MouseEvent, hasSubcategories: boolean) => {
        if (hasSubcategories) {
            e.preventDefault();
            setActiveCategory(activeCategory === idx ? null : idx);
        }
    };

    const handleSubCategoryClick = (idx: number, e: React.MouseEvent, hasChildCategories: boolean) => {
        if (hasChildCategories) {
            e.preventDefault();
            setActiveSubCategory(activeSubCategory === idx ? null : idx);
        }
    };

    return (
        <div className="relative">
            <div className={`w-full z-50 bg-white transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-md' : 'relative'}`}>
                <div className="flex flex-col sm:flex-row max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto  items-center px-6 sm:px-3 py-4 rounded-lg gap-4 sm:gap-0">

                    <div className="flex items-center justify-between w-full sm:w-auto ml-2.5 mr-5">
                        <button
                            className="flex items-center gap-2 py-2 hover:text-[color:var(--color-primary)] rounded-md cursor-pointer transition-colors duration-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle Categories Menu"
                        >
                            <div className="flex items-center">
                                <span className="text-xl text-black">Categories</span>
                                <RiArrowDropDownLine className="text-3xl text-black " />
                            </div>
                        </button>

                        <div className="block sm:hidden">
                            <button
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                className="text-black transition-all duration-200"
                                aria-label="Toggle Navigation"
                            >
                                {isNavOpen ? (
                                    <AiOutlineClose className="text-2xl" />
                                ) : (
                                    <AiOutlineMenu className="text-2xl" />
                                )}
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div
                            ref={dropdownRef}
                            className="absolute top-full w-full sm:w-64 bg-white rounded-lg shadow-lg z-50 border border-gray-100"
                        >
                            <div className="py-2">
                                {menuCategories.map((category, idx) => (
                                    <div
                                        key={`category-${idx}`}
                                        className="relative group"
                                        onMouseEnter={() => window.innerWidth >= 640 && setActiveCategory(idx)}
                                        onMouseLeave={() => window.innerWidth >= 640 && setActiveCategory(null)}
                                    >
                                        <Link
                                            to={category.link || ""}
                                            className="flex justify-between items-center px-5 py-3 text-black hover:text-[color:var(--color-primary)] hover:bg-[#064490] transition-all duration-200"
                                            onClick={(e) => handleCategoryClick(idx, e, category.subcategories.length > 0)}
                                        >
                                            <span className="text-base font-medium">
                                                {category.name}
                                            </span>
                                            {category.subcategories.length > 0 && (
                                                <RiArrowDropDownLine
                                                    className={`text-xl text-gray-500 group-hover:text-[color:var(--color-primary)] transition-transform duration-200 ${activeCategory === idx ? "rotate-180" : "rotate-0"}`}
                                                />
                                            )}
                                        </Link>

                                        {activeCategory === idx && category.subcategories.length > 0 && (
                                            <div className={`sm:absolute sm:left-full sm:top-0 w-full sm:w-64 bg-white rounded-lg shadow-lg sm:ml-0.5 ${window.innerWidth < 640 ? 'relative pl-4' : ''}`}>
                                                <div className="py-2">
                                                    {category.subcategories.map((subItem, subIdx) => (
                                                        <div
                                                            key={`subcategory-${subIdx}`}
                                                            className="relative group"
                                                            onMouseEnter={() => window.innerWidth >= 640 && setActiveSubCategory(subIdx)}
                                                            onMouseLeave={() => window.innerWidth >= 640 && setActiveSubCategory(null)}
                                                        >
                                                            <Link
                                                                to={subItem.link || ""}
                                                                className="flex justify-between items-center px-5 py-3 text-black hover:text-[color:var(--color-primary)] hover:bg-[#064490] transition-all duration-200"
                                                                onClick={(e) => handleSubCategoryClick(subIdx, e, (subItem["child-subcategories"]?.length ?? 0) > 0)}
                                                            >
                                                                <span className="text-base font-medium">
                                                                    {subItem.name}
                                                                </span>
                                                                {(subItem["child-subcategories"]?.length ?? 0) > 0 && (
                                                                    <RiArrowDropDownLine
                                                                        className={`text-xl text-gray-500 transition-transform duration-200 ${activeSubCategory === subIdx ? "rotate-180" : "rotate-0"} group-hover:text-[color:var(--color-primary)]`}
                                                                    />
                                                                )}
                                                            </Link>

                                                            {activeSubCategory === subIdx && subItem["child-subcategories"] && (
                                                                <div className={`sm:absolute sm:left-full sm:top-0 w-full sm:w-64 bg-white rounded-lg shadow-lg sm:ml-0.5 ${window.innerWidth < 640 ? 'relative pl-4' : ''}`}>
                                                                    <div className="py-2">
                                                                        {subItem["child-subcategories"].map((childItem, childIdx) => (
                                                                            <Link
                                                                                key={`child-${childIdx}`}
                                                                                to={childItem.link || ""}
                                                                                className="block px-5 py-3 text-black hover:text-[color:var(--color-primary)] hover:bg-[#064490] transition-all duration-200"
                                                                                onClick={() => setIsMenuOpen(false)}
                                                                            >
                                                                                {childItem.name}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="w-full flex justify-between items-center">
                        <ul className="hidden sm:flex gap-6 text-black text-sm font-medium">
                            {NAV_LINKS.map(({ path, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className="relative px-2 transition-all duration-300 font-semibold hover:text-[color:var(--color-primary)] hover:underline hover:underline-offset-[6px] hover:decoration-2"
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </ul>

                            <div className="flex items-center gap-2 text-black">
                                <p>Contact: (808) 555-0111</p>
                                
                            </div>
                    </div>

                </div>

                {isNavOpen && (
                    <div className="block sm:hidden bg-[#023e8a] px-4 py-2">
                        <ul className="flex flex-col gap-4 text-black text-sm font-medium">
                            {NAV_LINKS.map(({ path, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    onClick={() => setIsNavOpen(false)}
                                    className="block px-4 py-2 transition-all duration-300 text-center font-semibold hover:bg-[color:var(--color-primary)] rounded-md"
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
