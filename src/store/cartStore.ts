import { create } from 'zustand';

interface Product {
    id: string | number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string | number) => void;
    clearCart: () => void;
    increaseQuantity: (id: string | number) => void;
    decreaseQuantity: (id: string | number) => void;
    totalPrice: number;
}

export const useCartStore = create<CartState>((set: (fn: (state: CartState) => Partial<CartState>) => void, get: () => CartState) => ({
    cart: [],

    addToCart: (product) => {
        const state = get();
        const exists = state.cart.find((item) => item.id === product.id);

        if (exists) {
            set((state) => ({
                cart: state.cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            }));
        } else {
            set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] }));
        }

        set((state) => ({ totalPrice: calculateTotal(state.cart) }));
    },

    removeFromCart: (id) => {
        set((state: CartState) => {
            const updatedCart = state.cart.filter((item) => item.id !== id);
            return { cart: updatedCart, totalPrice: calculateTotal(updatedCart) };
        });
    },

    clearCart: () => set(() => ({ cart: [], totalPrice: 0 })),

    increaseQuantity: (id: string | number) => {
        set((state: CartState) => {
            const updatedCart = state.cart.map((item: Product) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { cart: updatedCart, totalPrice: calculateTotal(updatedCart) };
        });
    },

    decreaseQuantity: (id: string | number) => {
        set((state: CartState) => {
            const updatedCart = state.cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            return { cart: updatedCart, totalPrice: calculateTotal(updatedCart) };
        });
    },

    totalPrice: 0,
}));

function calculateTotal(cart: Product[]) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export const useCartCount = () =>
    useCartStore((state) =>
        state.cart.reduce((count, item) => count + item.quantity, 0)
    );