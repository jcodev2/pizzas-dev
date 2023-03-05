import { CartProvider } from 'context/cart'
import { AnimatePresence } from 'framer-motion'
import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode='wait'>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AnimatePresence>
  )
}
