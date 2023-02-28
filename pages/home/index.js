import Layout from 'components/Layout'
import Navigation from 'components/Navigation'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import getDataFromLocalStorage from 'helpers/getDataFromLocalStorage'
import useMenu from 'hooks/useMenu'
import Link from 'next/link'

export default function Home({ cartLocalStorage }) {
  const [, pizzasOfTheDay] = useMenu()

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
            {cartLocalStorage.length > 0 ? (
              cartLocalStorage.map(({ id, name, image, price }) => (
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

export async function getServerSideProps() {
  const cartLocalStorage = getDataFromLocalStorage('cart')

  return {
    props: {
      cartLocalStorage
    }
  }
}
