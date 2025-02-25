import create from 'zustand';

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartStore {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            return {
                cart: state.cart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: item.quantity } : cartItem
                ),
            };
        } else {
            return { cart: [...state.cart, item] };
        }
    }),
    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
    })),
    clearCart: () => set({ cart: [] }),
}));