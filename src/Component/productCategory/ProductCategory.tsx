import axios from "axios";
import { useEffect, useState } from "react";
import { MdPalette, MdDevices, MdMiscellaneousServices } from "react-icons/md";
import { FaCamera, FaImage, FaBriefcase, FaEnvelopeOpenText, FaBookOpen, FaCode, FaHeadphones, FaBrain } from "react-icons/fa";
import { AiOutlineLayout, AiOutlineCalendar } from "react-icons/ai";
import { GiAbstract050 } from "react-icons/gi";

interface Product {
    id: number;
    name: string;
    icon: string;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    palette: MdPalette,
    camera: FaCamera,
    image: FaImage,
    devices: MdDevices,
    briefcase: FaBriefcase,
    layout: AiOutlineLayout,
    envelope: FaEnvelopeOpenText,
    calendar: AiOutlineCalendar,
    book: FaBookOpen,
    code: FaCode,
    headphones: FaHeadphones,
    brain: FaBrain,
    services: MdMiscellaneousServices,
    GiAbstract050: GiAbstract050,
};

const ProductCategory = () => {
    const [productCategory, setProductCategory] = useState<Product[]>([]);
    const [isError, setIsError] = useState(false);

    const getProductCategory = async () => {
        try {
            const res = await axios.get<Product[]>("./productCategory.json");
            setProductCategory(res.data);
        } catch {
            setIsError(true);
        }
    };

    useEffect(() => {
        getProductCategory();
    }, []);

    if (isError) {
        return <h2 className="text-4xl text-center font-bold text-red-600">Error</h2>;
    }

    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-4 my-4 bg-gray-50">
            <div className="text-center mb-4">
                <h2 className="text-4xl font-bold mb-4 text-[var(--color-primary)]">
                    PRODUCT CATEGORY
                </h2>
                <p className="text-gray-600 max-w-screen-2xl mx-auto text-lg px-4 mb-4 pb-4">
                    Explore our wide range of product categories to find exactly what you're looking for
                </p>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center justify-center">
                {productCategory?.map(({ id, name, icon }) => {
                    const IconComponent = iconMap[icon];
                    return (
                        <div
                            key={id}
                            className="group h-[180px] p-1.5 md:p-3 bg-white rounded-2xl shadow-sm hover:shadow-xl 
                                        transform transition-all duration-300 
                                        cursor-pointer border border-gray-100 hover:border-[var(--color-primary)]/20
                                        flex flex-col items-center justify-center"
                        >
                            {IconComponent ? (
                                <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent
                                            group-hover:from-[var(--color-primary)]/10 group-hover:to-transparent 
                                            transition-all duration-300">
                                    <IconComponent className="text-4xl text-[var(--color-primary)] group-hover:scale-110 
                                                            transition-transform duration-300" />
                                </div>
                            ) : (
                                <div className="mb-4 h-16 flex items-center justify-center text-[var(--color-primary)]">
                                    {icon}
                                </div>
                            )}
                            <h2 className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-[var(--color-primary)] 
                                            transition-colors duration-300 text-center ">
                                {name}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductCategory;
