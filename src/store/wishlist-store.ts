import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface WishlistItem {
    id: string;
    name: string;
    slug: string;
    price: number;
    featuredImage: string;
}

export const wishlistAtom = atomWithStorage<WishlistItem[]>("wishlist", []);

export const wishlistCounterAtom = atom((get) => get(wishlistAtom).length);
