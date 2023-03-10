import { CartProvider } from 'context/cart'
import { MenuProvider } from 'context/menu'
import { AnimatePresence } from 'framer-motion'
import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode='wait'>
      <MenuProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </MenuProvider>
    </AnimatePresence>
  )
}
