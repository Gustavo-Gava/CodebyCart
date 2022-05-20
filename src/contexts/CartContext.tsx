import { createContext, Dispatch, SetStateAction, useState, useContext } from "react"
import { ItemProps } from "../pages"

interface CartContextProps {
 cart: ItemProps[]
 setCart: Dispatch<SetStateAction<ItemProps[]>>
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([] as ItemProps[])

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)