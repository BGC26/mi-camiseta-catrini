import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {

    const [productList, setProductList] = useState([]);

    const isInCart = (id) => {
        return productList.some(item => item.id === id)
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            setProductList(productList.map((product) => product.id === item.id ? {...product, quantity: product.quantity + quantity} : product))
        }
        setProductList([...productList, {...item, quantity}])
    }

    const removeItem = (id) => {
        setProductList(productList.filter(item => item.id !== id));
    }

    const clear = () => {
        setProductList([]);
    }

    const totalItems = () => {
        return productList.reduce((total, item) => total + item.quantity, 0)
    }

    const totalPrice = () => {
        return productList.reduce((total, item) => total + item.quantity * item.price, 0)
    }

    const quantityPerProduct = (id) => {
        return productList.find(item => item.id === id).quantity;
    }

    return (
        <CartContext.Provider value={{
            productList,
            isInCart,
            addItem,
            removeItem,
            clear,
            totalItems,
            totalPrice,
            quantityPerProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;