import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiMessengerLogoBold } from "react-icons/pi";
import SellerLogo from "../assets/BazarBound.png";
import { Link } from "react-router-dom";
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

const images = [
    "https://i.ibb.co/PZdQytc9/pexels-geyonk-1152077.jpg",
    "https://i.ibb.co/sdZYF1zY/pexels-pixabay-267202.jpg",
    "https://i.ibb.co/CK02Fcwj/pexels-willoworld-3768005.jpg",
    "https://i.ibb.co/PZdQytc9/pexels-geyonk-1152077.jpg",
];

type TabType = "description" | "reviews" | "faq";

const Description = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeTab, setActiveTab] = useState<TabType>("description");
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const getProductData = async () => {
        try {
        const res = await axios.get("/productCategory.json");
        setProducts(res.data);
        } catch (error) {
        console.log(error instanceof Error ? error.message : "An error occurred");
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <style>
            {`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #064490;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #053979;
                }
            `}
        </style>
        <div className="flex flex-col space-y-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
            {/* Left: Image Carousel */}
            <div className="w-full lg:w-1/2">
                <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-300 flex items-center justify-center rounded-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover rounded-lg transition-all duration-300"
                />
                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                    onClick={prevSlide}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                    onClick={nextSlide}
                >
                    <FaChevronRight />
                </button>
                </div>
                <div className="flex justify-center space-x-2 mt-3">
                {images.map((image, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 transition ${
                        currentIndex === index
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    >
                    <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    </button>
                ))}
                </div>
            </div>
            {/* Right: Product Details */}
            <div className="w-full lg:w-1/2 space-y-4 text-left sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold">Title</h2>

                <p className="text-2xl sm:text-3xl font-bold text-green-600">
                $10.00
                </p>

                <div className="flex justify-start space-x-4">
                <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-green-700 transition">
                    Add to Cart
                </button>
                <button className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-blue-600 transition">
                    Buy Now
                </button>
                </div>

                <p className="text-blue-600 flex justify-start items-center space-x-1">
                📥 <span>Digital Download</span>
                </p>

                <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                    Product Summary
                </h3>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Three New Landing Demos</li>
                    <li>Future updates</li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                </ul>
                </div>
            </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-white p-2">
            <div className="w-full lg:w-3/4">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap -mb-px text-sm sm:text-lg font-semibold">
                {["description", "reviews", "faq"].map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab as TabType)}
                    className={`mr-4 py-2 px-2 sm:px-4 border-b-2 transition-colors duration-200 ${
                        activeTab === tab
                        ? "border-[#064490] text-[#064490]"
                        : "border-transparent text-gray-500 hover:text-[#064490]"
                    }`}
                    >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
                </div>

                {/* Description Section */}
                {activeTab === "description" && (
                <div className="mt-6 bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#064490]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    Product Description
                    </h2>
                    <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eos, ex laudantium, modi velit facilis adipisci tempora
                        quibusdam necessitatibus esse et culpa, cum eius a minima.
                        Iusto expedita iure dolorum quod facilis perspiciatis
                        doloribus voluptate.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                        <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        High-quality digital product
                        </li>
                        <li className="flex items-center gap-2">
                        <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Instant download after purchase
                        </li>
                        <li className="flex items-center gap-2">
                        <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Free updates included
                        </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eos, ex laudantium, modi velit facilis adipisci tempora
                        quibusdam necessitatibus esse et culpa, cum eius a minima.
                        Iusto expedita iure dolorum quod facilis perspiciatis
                        doloribus voluptate. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eos, ex laudantium, modi velit facilis
                        adipisci tempora quibusdam necessitatibus esse et culpa, cum
                        eius a minima. Iusto expedita iure dolorum quod facilis
                        perspiciatis doloribus voluptate. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Eos, ex laudantium, modi
                        velit facilis adipisci tempora quibusdam necessitatibus esse
                        et culpa, cum eius a minima. Iusto expedita iure dolorum
                        quod facilis perspiciatis doloribus voluptate. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Eos, ex
                        laudantium, modi velit facilis adipisci tempora quibusdam
                        necessitatibus esse et culpa, cum eius a minima. Iusto
                        expedita iure dolorum quod facilis perspiciatis doloribus
                        voluptate. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eos, ex laudantium, modi velit facilis
                        adipisci tempora quibusdam necessitatibus esse et culpa, cum
                        eius a minima. Iusto expedita iure dolorum quod facilis
                        perspiciatis doloribus voluptate. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Eos, ex laudantium, modi
                        velit facilis adipisci tempora quibusdam necessitatibus esse
                        et culpa, cum eius a minima. Iusto expedita iure dolorum
                        quod facilis perspiciatis doloribus voluptate. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Eos, ex
                        laudantium, modi velit facilis adipisci tempora quibusdam
                        necessitatibus esse et culpa, cum eius a minima. Iusto
                        expedita iure dolorum quod facilis perspiciatis doloribus
                        voluptate. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eos, ex laudantium, modi velit facilis
                        adipisci tempora quibusdam necessitatibus esse et culpa, cum
                        eius a minima. Iusto expedita iure dolorum quod facilis
                        perspiciatis doloribus voluptate. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Eos, ex laudantium, modi
                        velit facilis adipisci tempora quibusdam necessitatibus esse
                        et culpa, cum eius a minima. Iusto expedita iure dolorum
                        quod facilis perspiciatis doloribus voluptate. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Eos, ex
                        laudantium, modi velit facilis adipisci tempora quibusdam
                        necessitatibus esse et culpa, cum eius a minima. Iusto
                        expedita iure dolorum quod facilis perspiciatis doloribus
                        voluptate. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eos, ex laudantium, modi velit facilis
                        adipisci tempora quibusdam necessitatibus esse et culpa, cum
                        eius a minima. Iusto expedita iure dolorum quod facilis
                        perspiciatis doloribus voluptate.
                    </p>
                    </div>
                </div>
                )}

                {/* Reviews Section */}
                {activeTab === "reviews" && (
                <div className="mt-6 bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Customer Reviews
                    </h2>
                    <p className="text-gray-600">
                    No reviews yet. Be the first to review this product!
                    </p>
                </div>
                )}

                {/* Questions Section */}
                {activeTab === "faq" && (
                <div className="mt-6 bg-white shadow-md p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Questions & Answers
                    </h2>
                    <p className="text-gray-600">
                    No questions yet. Ask your question now!
                    </p>
                </div>
                )}
            </div>

            <div className="w-full lg:w-1/4 space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                    <span className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#064490]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                    Seller Information
                    </span>
                </h2>

                {/* Seller Profile */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden ring-4 ring-[#064490]/10">
                    <img
                        src={SellerLogo}
                        alt="Seller Logo"
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                        <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1 inline-flex items-center">
                            Shop Name
                            <span className="ml-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17.5"
                                height="17.5"
                                viewBox="0 0 17.5 17.5"
                            >
                                <g
                                id="Group_25616"
                                data-name="Group 25616"
                                transform="translate(-537.249 -1042.75)"
                                >
                                <path
                                    id="Union_5"
                                    data-name="Union 5"
                                    d="M0,8.75A8.75,8.75,0,1,1,8.75,17.5,8.75,8.75,0,0,1,0,8.75Zm.876,0A7.875,7.875,0,1,0,8.75.875,7.883,7.883,0,0,0,.876,8.75Zm.875,0a7,7,0,1,1,7,7A7.008,7.008,0,0,1,1.751,8.751Zm3.73-.907a.789.789,0,0,0,0,1.115l2.23,2.23a.788.788,0,0,0,1.115,0l3.717-3.717a.789.789,0,0,0,0-1.115.788.788,0,0,0-1.115,0l-3.16,3.16L6.6,7.844a.788.788,0,0,0-1.115,0Z"
                                    transform="translate(537.249 1042.75)"
                                    fill="#3490f3"
                                ></path>
                                </g>
                            </svg>
                            </span>
                        </h3>
                        <p className="text-gray-600 text-sm">Seller Name</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-sm text-gray-500 mt-2">
                        <span className="flex items-center gap-1">
                        <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        4.8
                        </span>
                        <span>•</span>
                        <span>100+ sales</span>
                    </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center p-2">
                    <p className="text-lg sm:text-xl font-bold text-[#064490]">
                        98%
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                        Response Rate
                    </p>
                    </div>
                    <div className="text-center border-x border-gray-200 p-2">
                    <p className="text-lg sm:text-xl font-bold text-[#064490]">
                        ~2h
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                        Response Time
                    </p>
                    </div>
                    <div className="text-center p-2">
                    <p className="text-lg sm:text-xl font-bold text-[#064490]">
                        245
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                        Total Orders
                    </p>
                    </div>
                </div>

                {/* Contact Seller Button */}
                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#064490] hover:bg-[#053979] text-white py-2 px-4 rounded-md transition-colors">
                    <PiMessengerLogoBold className="text-lg" />
                    <span>Message Seller</span>
                </button>
                </div>

                {/* Similar Products Section */}
                <div className="mt-5 bg-white rounded-xl shadow-sm p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold mb-6">
                    Similar Products
                </h1>
                <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    <div className="grid gap-4">
                    {products.slice(0, 8).map((product, id) => (
                        <Link key={id} to={`/single-product/${id}`}>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-white shadow-md rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="w-full sm:w-24 h-32 sm:h-24 flex-shrink-0 rounded-md overflow-hidden border">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                            <h2 className="text-base font-semibold leading-tight">
                                {product.name}
                            </h2>
                            <p className="text-[#064490] font-bold text-base mt-1">
                                Tk. {product.price}.00
                            </p>
                            <div className="flex items-center justify-center sm:justify-start mt-2 text-yellow-400">
                                {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <svg
                                    key={i}
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-sm text-gray-600 ml-1">
                                (5.0)
                                </span>
                            </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Description;
