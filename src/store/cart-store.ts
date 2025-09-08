import { atom } from "jotai";

export interface CartItem {
    id: string | number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

export const cartAtom =  atom<CartItem[]>([]);

export const cartCounterAtom = atom((get) => get(cartAtom).length);