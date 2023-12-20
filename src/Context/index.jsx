import { createContext } from 'react';
import { useState } from 'react';

export const ShoppingCartContext = createContext()

export const  ShoppingCartProvider = ({children}) => {

    //Contador del shopping cart
    const [count, setCount] = useState(0)

    //abrir y cerrar aside con detalle del producto
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //mostrar el producto detallado
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            setProductToShow,
            productToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>   
    )
}