import { wishlistAtom, wishlistCounterAtom } from "../store/wishlist-store";
import { useAtom } from "jotai";
import { showSuccessToast, showErrorToast } from "../utils/toast-utils";

interface WishlistProduct {
  id: number | string;
  title: string;
  price: number;
  image: string;
  inStock: boolean;
  rating: number;
}

const useWishlist = () => {
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const [wishlistCounter] = useAtom(wishlistCounterAtom || 0);

  const addToWishlist = (product: WishlistProduct): void => {
    const newWishlist = [...wishlist, product];
    setWishlist(newWishlist);
    showSuccessToast("Item added to wishlist successfully.");

    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const removeFromWishlist = (product: { id: number | string }): void => {
    const newWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(newWishlist);
    showErrorToast("Item removed from wishlist successfully.");

    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const isInWishlist = (product: { id: number | string }): boolean => {
    return wishlist.some((item) => item.id === product.id);
  };

  return {
    wishlist,
    wishlistCounter,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
};

export default useWishlist;
