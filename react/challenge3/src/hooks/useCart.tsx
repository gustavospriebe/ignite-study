import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

interface CartContextData {
    cart: Product[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Product[]>(() => {
        const storagedCart = localStorage.getItem("@RocketShoes:cart");

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }
        return [];
    });

    const addProduct = async (productId: number) => {
        try {
            let updatedCart = [...cart];
            const productExists = updatedCart.find(
                (product) => product.id === productId
            );

            const stockProduct = await api.get<Stock>(`stock/${productId}`);

            if (
                productExists &&
                productExists.amount >= stockProduct.data.amount
            ) {
                toast.error("Quantidade solicitada fora de estoque");
                return;
            }

            if (productExists) {
                productExists.amount += 1;
            } else {
                const productInfo = await api.get(`products/${productId}`);

                updatedCart.push({ ...productInfo.data, amount: 1 });
            }
            setCart(updatedCart);
            localStorage.setItem(
                "@RocketShoes:cart",
                JSON.stringify(updatedCart)
            );
        } catch {
            toast.error("Erro na adição do produto");
        }
    };

    const removeProduct = (productId: number) => {
        try {
            let updatedCart = [...cart];
            const productExists = updatedCart.find(
                (product) => product.id === productId
            );

            if (productExists) {
                updatedCart = updatedCart.filter(
                    (product) => product.id !== productId
                );
            } else {
                throw Error();
            }

            setCart(updatedCart);
            localStorage.setItem(
                "@RocketShoes:cart",
                JSON.stringify(updatedCart)
            );
        } catch {
            toast.error("Erro na remoção do produto");
        }
    };

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount <= 0) {
                return;
            }

            const stockProduct = await api.get<Stock>(`stock/${productId}`);

            if (amount >= stockProduct.data.amount) {
                toast.error("Quantidade solicitada fora de estoque");
                return;
            }

            let updatedCart = [...cart];
            const productExists = updatedCart.find(
                (product) => product.id === productId
            );

            if (productExists) {
                productExists.amount = amount;
                setCart(updatedCart);
                localStorage.setItem(
                    "@RocketShoes:cart",
                    JSON.stringify(updatedCart)
                );
            } else {
                throw Error();
            }
        } catch {
            toast.error("Erro na alteração de quantidade do produto");
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductAmount }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}
