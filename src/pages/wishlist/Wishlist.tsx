import { useState, useEffect } from "react";
import { useCartStore } from "../../store/cartStore";
import useWishlist from "../../hooks/useWishlist";
import WishlistProductCard, { WishlistProduct } from "../../Component/card/WishListProductCard";
import usePaginate from "../../hooks/usePaginate";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import constants from "../../constants";
import Pagination from "../../Component/pagination";



const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCartStore();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const {
        currentSelectedPage,
        setCurrentSelectedPage,
        getTotalPages,
        handleBookPagination,
        startIndex,
        endIndex,
        getStartAndEndIndex,
    } = usePaginate();

    useEffect(() => {
        getStartAndEndIndex(wishlist.length, constants.WISHLIST_LIMIT);
    }, [getStartAndEndIndex, wishlist.length]);

    const handleRemoveFromWishlist = (product: WishlistProduct) => {
        removeFromWishlist({ id: product.id });

        const totalPages = getTotalPages(wishlist.length - 1, constants.WISHLIST_LIMIT);
        if (currentSelectedPage > totalPages) {
            setCurrentSelectedPage(totalPages);
        }
    };

    const handleMoveToCart = (product: WishlistProduct) => {
        addToCart({
            id: product.id,
            name: product.title,
            description: "",
            price: product.price,
            image: product.image,
            quantity: 1,
        });
        handleRemoveFromWishlist(product);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-12 animate-fade-in-down">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">My Wishlist</h2>
                        <p className="text-gray-500 mt-1">
                            {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
                        </p>
                    </div>
                </div>

                {/* Empty State */}
                {wishlist.length === 0 ? (
                    <div className="text-center p-16 bg-white rounded-2xl border border-gray-100 shadow-xl">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaHeart className="text-gray-300 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Explore our products and add your favorites to the wishlist.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                            {wishlist.slice(startIndex, endIndex).map((item, index) => (
                                <WishlistProductCard
                                    key={item.id}
                                    product={item}
                                    index={index}
                                    onViewImage={() => setSelectedImage(item.image)}
                                    onMoveToCart={handleMoveToCart}
                                    onRemoveFromWishlist={handleRemoveFromWishlist}
                                />
                            ))}
                        </div>

                        <Pagination
                            totalPages={getTotalPages(wishlist.length, constants.WISHLIST_LIMIT)}
                            currentSelectedPage={currentSelectedPage}
                            handleBookPagination={handleBookPagination}
                        />
                    </>
                )}

                {/* Image Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="relative bg-white p-2 rounded-2xl max-w-3xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <FaTrashAlt size={16} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Selected product"
                                className="w-full h-full object-contain rounded-xl"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
