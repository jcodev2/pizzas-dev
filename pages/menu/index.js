import Layout from 'components/Layout'
import Navigation from 'components/Navigation'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import useMenu from 'hooks/useMenu'

const layoutProps = {
  title: 'Menu - Pizzas',
  description: 'Menu page for the Pizzas site',
  keywords: 'pizzas, menu'
}

export default function Menu() {
  const [memorizedMenu] = useMenu()

  return (
    <Layout {...layoutProps}>
      <Search />
      <Navigation />

      <section className='home'>
        <article className='menu'>
          <div className='menu-header'>
            <h2>Menu</h2>
          </div>
          <div className='pizzas'>
            {memorizedMenu.map(({ id, name, image, price }) => (
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
