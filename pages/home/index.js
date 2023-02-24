import Layout from 'components/Layout'
import Navigation from 'components/Navigation'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import useMenu from 'hooks/useMenu'
import Link from 'next/link'

export default function Home() {
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
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
