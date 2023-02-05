import Layout from 'components/Layout'
import Navigation from 'components/Navigation'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import useMenu from 'hooks/useMenu'

export default function Home() {
  const [menu] = useMenu()

  return (
    <Layout>
      <Search />
      <Navigation />

      <section className='home'>
        <article className='menu'>
          <div className='menu-header'>
            <h2>Menu</h2>
          </div>
          <div className='pizzas'>
            {menu.map(({ id, name, image, price }) => (
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
