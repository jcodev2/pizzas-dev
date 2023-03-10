import Layout from 'components/Layout'
import Loading from 'components/Loading'
import Navigation from 'components/Navigation'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import useMenu from 'hooks/useMenu'

const layoutProps = {
  title: 'Menu - Pizzas',
  description: 'Menu page for the Pizzas site',
  keywords: 'pizzas, menu',
  image: '/public/img/logo.png',
  url: 'https://pizzas.vercel.app'
}

export default function Menu() {
  const { menu, isLoading, isError } = useMenu()

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
            {isLoading ? (
              <Loading />
            ) : isError ? (
              <p>Error</p>
            ) : (
              menu[0].map(({ id, name, image, price }) => (
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
