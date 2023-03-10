import { debounce } from 'lodash'
import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = debounce((pizza) => {
    const isPizzaInCart = cart.find((item) => item.id === pizza.id)
    if (isPizzaInCart) {
      const newCart = cart.map((item) => {
        if (item.id === pizza.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      setCart(newCart)
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }])
    }
  }, 500)

  const removeFromCart = debounce((pizza) => {
    const newCart = cart.map((item) => {
      if (item.id === pizza.id) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    const isPizzaInCart = newCart.find((item) => item.id === pizza.id)
    if (isPizzaInCart.quantity > 0) {
      setCart(newCart)
    } else {
      setCart(cart.filter((item) => item.id !== pizza.id))
    }
  }, 500)

  const clearCart = debounce(() => {
    setCart([])
  }, 500)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
