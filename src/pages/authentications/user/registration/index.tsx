import { FiUser } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import companyLogo from "../../../../assets/BazarBound.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
      <div className="p-8 lg:p-12 flex h-screen w-screen bg-[#F7F7F7] items-center justify-center">
        <div className="w-2xl mx-auto space-y-8">
          <div className="">
            <img
              src={companyLogo}
              alt="company logo"
              className="w-40 mx-auto mb-4"
            />
            <h1 className="text-3xl text-center font-bold text-[#092c4c] mb-2">Registration</h1>
            <p className="text-[15px] text-center text-gray-600">
              Create New Bazaarbound Account
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-4">
              <div>
                <label className="block mb-1.5">
                  <span className="text-[14px] font-bold text-[#064490]">
                    Name
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    className="w-full bg-white text-[#212b36] px-4 py-4 border border-[#e6eaed] rounded-lg focus:outline-none focus:border-[#064490] transition-all duration-200"
                    required
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none transition-colors duration-200">
                    <FiUser className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-1.5">
                  <span className="text-[14px] font-bold text-[#064490]">
                    Email
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    className="w-full bg-white text-[#212b36] px-4 py-4 border border-[#e6eaed] rounded-lg focus:outline-none focus:border-[#064490] transition-all duration-200"
                    required
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none  transition-colors duration-200">
                    <LuMail className="h-5 w-5" />
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

              <div>
                <label className="block mb-1.5">
                  <span className="text-[14px] font-bold text-[#064490]">
                    Confirm Password
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative group">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full bg-white text-[#212b36] px-4 py-4 border border-[#e6eaed] rounded-lg focus:outline-none focus:border-[#064490] transition-all duration-200"
                    required
                  />
                  <div
										className="absolute inset-y-0 right-3 flex items-center cursor-pointer  transition-colors duration-200 border-l pl-2 border-gray-200"
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									>
										{showConfirmPassword ? (
											<BiSolidShow className="h-5 w-5  hover:text-gray-700" />
										) : (
											<BiSolidHide className="h-5 w-5  hover:text-gray-700" />
										)}
									</div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#064490] border border-[#064490] text-white py-3 rounded-lg hover:bg-white hover:text-[#064490] font-bold transform transition-all duration-200 cursor-pointer"
            >
              Sign Up
            </button>

            <p className="text-center text-[15px] text-[#092C4C]">
              Already have an account?{" "}
              <Link to={"/login"}
                className="font-semibold hover:text-[#064490] hover:border-b-2 border-[#064490] transition-colors duration-200"
              >
                Sign In
              </Link>
            </p>

            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-1/5 mx-auto border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-[14px] text-[#646b72] font-bold">
                <span className="px-4 bg-[#F7F7F7] text-gray-500">OR</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="p-3 w-42 flex items-center justify-center bg-[#1877F2] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200  cursor-pointer">
                <FaFacebook className="h-6 w-6 text-white  cursor-pointer" />
              </button>
              <button className="p-3 w-42 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200  cursor-pointer">
                <FcGoogle className="h-6 w-6" />
              </button>
              <button className="p-3 w-42 flex items-center justify-center bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <FaApple className="h-6 w-6 text-white" />
              </button>
            </div> */}
          </form>
        </div>
      </div>
  );
};

export default UserRegistration;
