import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';
import { GrAnnounce } from "react-icons/gr";
import { FaExclamationCircle } from "react-icons/fa";

type Language = "EN" | "FR" | "ES" | "DE";


const LANGUAGES: { value: Language; label: string }[] = [
    { value: "EN", label: "English" },
    { value: "FR", label: "French" },
    { value: "ES", label: "Spanish" },
    { value: "DE", label: "German" },
];

const Header = () => {
    const [language, setLanguage] = useState<Language>("EN");

    return (
        <header className="py-1 w-full bg-[#272343] text-white">
            <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-1 md:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-0">
                    <div className="hidden sm:block text-center">
                        <Marquee speed={100} gradient={false} pauseOnHover={true} direction="right" className="text-xs md:text-sm">
                            <GrAnnounce className="text-sm mr-1" />
                            <p className="flex text-white gap-x-4">
                                <span>Free shipping on all orders over $50</span>
                            </p>
                        </Marquee>
                    </div>
                    <div className="hidden sm:flex sm:flex-row items-center justify-center md:justify-end gap-4 text-xs text-white w-auto">
                        <div className="flex items-center justify-between md:justify-start w-full sm:w-auto gap-4">
                            <div className="relative">
                                <select
                                    className="appearance-none px-3 py-1 pr-6 rounded-md text-white hover:text-[var(--color-primary)] text-xs font-medium cursor-pointer bg-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value as Language)}
                                >
                                    {LANGUAGES.map(({ value, label }) => (
                                        <option key={value} value={value} className="bg-transparent text-start">
                                            {label}
                                        </option>
                                    ))}
                                </select>
                                <BsChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs pointer-events-none hover:text-[var(--color-primary)]" />
                            </div>
                        </div>

                        <div className="cursor-pointer flex gap-2 items-center">
                            <span className="text-white"><FaExclamationCircle />
                            </span>
                            <p className="transition-colors duration-200 mr-2.5 hover:text-[var(--color-primary)]">
                                Need Help
                            </p>
                        </div>

                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
