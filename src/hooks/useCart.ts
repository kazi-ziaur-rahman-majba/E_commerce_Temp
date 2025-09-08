import { useAtom } from "jotai";
import { cartAtom, cartCounterAtom } from "../store/cart-store";
import { showSuccessToast, showErrorToast } from "../utils/toast-utils";

const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);
    const [cartCounter] = useAtom(cartCounterAtom);

    const addToCart = (product: { id: string | number; title: string; price: number; image: string; quantity: number }) => {
        if (isInCart(product)) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
            showSuccessToast("Item quantity increased in cart.");
        } else {
            const newCart = [...cart, { ...product, quantity: 1 }];
            setCart(newCart);
            showSuccessToast("Item added to cart successfully.");
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const removeFromCart = (product: { id: string | number }) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
        showErrorToast("Item removed from cart successfully.");

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const updateCartQuantity = (productId: string | number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart({ id: productId });
        } else {
            const updatedCart = cart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            );
            setCart(updatedCart);
            showSuccessToast("Cart quantity updated.");
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const isInCart = (product: { id: string | number }) => {
        return cart.some((item) => item.id === product.id);
    };

    return {
        cart,
        cartCounter,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        isInCart,
    };
};

export default useCart;
