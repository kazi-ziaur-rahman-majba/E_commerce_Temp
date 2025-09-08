import { LuMail } from "react-icons/lu";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import companyLogo from "../../../assets/BazarBound.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="p-8 lg:p-12 flex h-screen w-screen bg-[#F7F7F7] items-center justify-center">
            <div className="w-2xl mx-auto space-y-8">
                <div className="">
                    <img
                        src={companyLogo}
                        alt="company logo"
                        className="w-40 mx-auto mb-4"
                    />
                    <h1 className="text-3xl text-center font-bold text-[#092c4c] mb-2">Log in to your account</h1>
                    <p className="text-[15px] text-center text-gray-600">
                        Welcome back! Please enter your credentials.
                    </p>
                </div>

                <form className="space-y-5">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1.5">
                                <span className="text-[14px] font-bold text-[#064490]">
                                    Email Address
                                </span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    className="w-full bg-white text-[#212b36] px-4 py-4 border border-[#e6eaed] rounded-lg focus:outline-none focus:border-[#064490] transition-all duration-200"
                                    required
                                />
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none  transition-colors duration-200 border-l border-gray-200">
                                    <LuMail className="h-6 w-6 pl-2" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-1.5">
                                <span className="text-[14px] font-bold text-[#064490]">
                                    Password
                                </span>
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full bg-white text-[#212b36] px-4 py-4 border border-[#e6eaed] rounded-lg focus:outline-none focus:border-[#064490] transition-all duration-200"
                                    required
                                />
                                <div
										className="absolute inset-y-0 right-3 flex items-center cursor-pointer  transition-colors duration-200 border-l pl-2 border-gray-200"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<BiSolidShow className="h-5 w-5  hover:text-gray-700" />
										) : (
											<BiSolidHide className="h-5 w-5  hover:text-gray-700" />
										)}
									</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center cursor-pointer">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 cursor-pointer focus:outline-none"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-[15px] text-[#092c4c] font-normal cursor-pointer"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div>
                                <Link to={"/forgot-password"}
                                    className="text-[#064490] font-semibold text-[15px]"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate("/vendor-dashboard")}
                        type="submit"
                        className="w-full bg-[#064490] border border-[#064490] text-white py-3 rounded-lg hover:bg-white hover:text-[#064490] font-bold transform transition-all duration-200 cursor-pointer"
                    >
                        Sign In
                    </button>

                    <p className="text-center text-[15px] text-[#092C4C]">
                        Don't have an account? <span className="text-[#064490] font-semibold">Sign Up</span>
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link to={"/vendor-signup"}
                            className="bg-white text-[#064490] font-bold px-4 py-2 rounded-md border hover:text-white hover:bg-[#064490] hover:border border-[#064490] transition-colors duration-200"
                        >
                            Vendor Registration
                        </Link>

                        <Link to={"/signup"}
                            className="bg-[#064490] font-bold px-4 py-2 rounded-md text-white  hover:text-[#064490] hover:bg-white hover:border border-[#064490] transition-colors duration-200"
                        >
                            Customer Registration
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
