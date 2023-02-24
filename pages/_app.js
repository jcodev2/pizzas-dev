import { CartProvider } from 'context/cart'
import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
