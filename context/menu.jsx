import { createContext, useState } from 'react'

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}
