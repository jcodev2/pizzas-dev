import Layout from 'components/Layout'
import Navigation from 'components/Navigation'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import { CartContext } from 'context/cart'
import Link from 'next/link'
import { useContext } from 'react'

const layoutProps = {
  title: 'Cart - Pizzas',
  description: 'Cart page for the Pizzas site',
  keywords: 'pizzas, cart',
  image: '/public/img/logo.png',
  url: 'https://pizzas.vercel.app'
}

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext)

  const total = cart.reduce((acc, { price, quantity }) => {
    const newPrice = parseFloat(price)
    const newQuantity = parseInt(quantity)

    return acc + newPrice * newQuantity
  }, 0)

  return (
    <Layout {...layoutProps}>
      <Navigation />
      <Search />

      <section className='cart'>
        <article className='menu cart-size'>
          <div className='menu-header'>
            <h2>Cart</h2>
            <Link href='/menu'>Back to menu</Link>
          </div>

          <div className='pizzas'>
            {cart.length > 0 ? (
              cart.map(({ id, name, image, price }) => (
                <PizzaCard
                  key={id}
                  name={name}
                  image={image}
                  price={price}
                  id={id}
                />
              ))
            ) : (
              <p>There are no selected recipes</p>
            )}
          </div>

          <p className='length'>
            {cart.length > 0
              ? `You have ${cart.length} ${
                  cart.length === 1 ? 'recipe' : 'recipes'
                } in your cart`
              : 'Your cart is empty'}
          </p>

          <div className='total'>
            <h3>Order summary</h3>
            <div className='total-price'>
              <p className='total-title'>SubTotal</p>
              <p className='total-price-number'>$ {total}</p>
            </div>
            <div className='total-price'>
              <p className='total-title'>Delivery</p>
              <p className='total-price-number'>$ 5</p>
            </div>
            <div className='total-price'>
              <p className='total-title'>Total</p>
              <p className='total-price-number'>$ {total + 5}</p>
            </div>
          </div>

          <div className='clear'>
            <Link
              href='/menu'
              onClick={() => {
                clearCart()
              }}
              style={
                cart.length > 0 ? { display: 'flex' } : { display: 'none' }
              }
            >
              Clear cart
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  )
}
