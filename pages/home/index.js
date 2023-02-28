import Layout from 'components/Layout'
import Navigation from 'components/Navigation'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import { CartContext } from 'context/cart'
import useMenu from 'hooks/useMenu'
import Link from 'next/link'
import { useContext } from 'react'

export default function Home() {
  const [, pizzasOfTheDay] = useMenu()
  const { cart } = useContext(CartContext)

  return (
    <Layout>
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
            {pizzasOfTheDay.map(({ id, name, image, price }) => (
              <PizzaCard
                key={id}
                name={name}
                image={image}
                price={price}
                id={id}
              />
            ))}
          </div>
        </article>
      </section>
    </Layout>
  )
}
