import Layout from 'components/Layout'
import Loading from 'components/Loading'
import Navigation from 'components/Navigation'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import { CartContext } from 'context/cart'
import useMenu from 'hooks/useMenu'
import Link from 'next/link'
import { useContext } from 'react'

const layoutProps = {
  title: 'Home - Pizzas',
  description: 'Home page for the Pizzas site',
  keywords: 'pizzas, home',
  image: '/public/img/logo.png',
  url: 'https://pizzas.vercel.app'
}

export default function Home() {
  const { sixPizzas, isSixPizzasError, isSixPizzasLoading } = useMenu()
  const { cart } = useContext(CartContext)

  return (
    <Layout {...layoutProps}>
      <Search />
      <Navigation />

      <section className='home'>
        <article className='selected-recipies'>
          <div className='selected-recipe-header'>
            <h2>Selected Recipe</h2>
            <Link href='/cart'>View all</Link>
          </div>
          <div className='recipies'>
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
        </article>
        <article className='menu'>
          <div className='menu-header'>
            <h2>Pizzas of the day</h2>
            <Link href='/menu'>View all</Link>
          </div>
          <div className='pizzas'>
            {isSixPizzasLoading ? (
              <Loading />
            ) : isSixPizzasError ? (
              <p>There was an error</p>
            ) : (
              sixPizzas[0].map(({ id, name, image, price }) => (
                <PizzaCard
                  key={id}
                  name={name}
                  image={image}
                  price={price}
                  id={id}
                />
              ))
            )}
          </div>
        </article>
      </section>
    </Layout>
  )
}
