import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
// import Description from "./Component/Description";
import ScrollToTop from "./Component/scrollToTop/ScrollToTop";
// import AllCategories from "./pages/allCategories/AllCategories";
import Home from "./pages/home/Home";
// import MyCart from "./Component/myCart/MyCart";
import ErrorPage from "./pages/errorPage/ErrorPage";
// import OilPainting from "./pages/ArtWork/painting/OilPainting";
// import DigitalPainting from "./pages/ArtWork/painting/DigitalPainting";
// import SingleProduct from "./Component/singleProduct";
// import Wishlist from "./pages/wishlist/Wishlist";
// import Login from "./pages/authentications/login";
// import UserRegistration from "./pages/authentications/user/registration";
// import VendorRegistration from "./pages/authentications/vendor/registration";
// import ForgotPassword from "./pages/authentications/forgotPassword";
// import Dashboard from "./pages/vendor/dashboard";
// import Products from "./pages/vendor/inventory/products";
// import ProductDetails from "./pages/vendor/inventory/products/components/ProductDetails";
// import CreateProduct from "./pages/vendor/createProduct";
// import MainCategory from "./pages/vendor/inventory/category/main-category";
// import FirstCategory from "./pages/vendor/inventory/category/first-category/components";
// import SecondCategory from "./pages/vendor/inventory/category/second-category";
// import ThirdCategory from "./pages/vendor/inventory/category/third-category";
// import Brand from "./pages/vendor/inventory/brand";
// import HeroSlider from "./pages/vendor/settings/hero-slider";
// import Promotions from "./pages/vendor/settings/promotions";
// import HeaderFooterCMS from "./pages/vendor/settings/header-footer-cms";

const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                {/* <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<UserRegistration />} />
                <Route path="/vendor-signup" element={<VendorRegistration />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/vendor-dashboard" element={<Dashboard />} />
                <Route path="/vendor-products" element={<Products />} />
                <Route path="/vendor-product-details/:id" element={<ProductDetails />} />
                <Route path="/create-vendor-product" element={<CreateProduct />} />
                <Route path="/edit-vendor-product" element={<CreateProduct />} />
                <Route path="/main-category" element={<MainCategory />} />
                <Route path="/first-category" element={<FirstCategory />} />
                <Route path="/second-category" element={<SecondCategory />} />
                <Route path="/third-category" element={<ThirdCategory />} />
                <Route path="/brands" element={<Brand />} />
                <Route path="/hero-slider" element={<HeroSlider />} />
                <Route path="/promotion" element={<Promotions />} />
                <Route path="/header-footer-cms" element={<HeaderFooterCMS />} /> */}
                {/* <Route path="/review" element={<Review />} /> */}

                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/cart" element={<MyCart />} />
                    <Route path="/all-categories" element={<AllCategories />} />
                    <Route path="/artwork/painting/oil-painting" element={<OilPainting />} />
                    <Route path="/artwork/painting/digital-painting" element={<DigitalPainting />} />
                    <Route path="/description" element={<Description />} />
                    <Route path="/description/:id" element={<Description />} />
                    <Route path="/singleProduct" element={<SingleProduct />} />
                    <Route path="/singleProduct/:id" element={<SingleProduct />} /> */}
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
