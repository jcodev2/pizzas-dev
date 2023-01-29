import Layout from 'components/Layout'
import PizzaCard from 'components/PizzaCard'
import Search from 'components/Search'
import useMenu from 'hooks/useMenu'
import Link from 'next/link'

export default function Home() {
  const [menu] = useMenu()

  return (
    <Layout>
      <Search />

      <section className='home'>
        <article className='menu'>
          <div className='menu-header'>
            <h2>Menu</h2>
            <Link href='/menu'>View all</Link>
          </div>
          <div className='pizzas'>
            {menu.map(({ id, name, image, price }) => (
              <PizzaCard key={id} name={name} image={image} price={price} />
            ))}
          </div>
        </article>
      </section>
    </Layout>
  )
}
