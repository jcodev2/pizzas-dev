import Layout from 'components/Layout'
import Navigation from 'components/Navigation'
import { CartContext } from 'context/cart'
import useUser from 'hooks/useUser'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import getDate from 'utilities/getDate'
import loadingImage from '../../public/loading-image.jpg'

const layoutProps = {
  title: 'Account - Pizzas',
  description: 'Account page for the Pizzas site',
  keywords: 'pizzas, account'
}

export default function Account() {
  const { user, signOut } = useUser()
  const { cart } = useContext(CartContext)
  const date = getDate()

  return (
    <Layout {...layoutProps}>
      <Navigation />

      <aside className='account'>
        {user ? (
          <>
            <header className='account-header'>
              <Image
                src={user.user_metadata.avatar_url}
                alt={user.user_metadata.email}
                width={160}
                height={160}
                priority
              />
              <article className='user-info'>
                <h2>{user.user_metadata.full_name}</h2>
                <p>{user.user_metadata.email}</p>
              </article>
            </header>
            <section className='account-body'>
              <article className='box-info'>
                <div className='date'>
                  <h2>{date}</h2>
                  <p>The best day to buy pizzas</p>
                </div>
                <div className='pizzas-bought'>
                  <h2>{cart.length}</h2>
                  <p>Pizzas in your cart</p>
                </div>
              </article>
              <article className='box-description'>
                <h2>Description:</h2>
                <p>
                  Welcome to your pizza account page! Here, you can view your
                  total pizzas bought, your profile information, and check out
                  the best day to buy pizzas. Under the "Total Pizzas Bought"
                  section, you can view how many pizzas you've ordered from our
                  website. Finally, in the "Best Day to Buy Pizzas" section,
                  we'll provide you with data on the most popular day to buy
                  pizzas from our website. When you're ready to log out, simply
                  click on the "Log Out" button. Thank you for choosing our
                  pizza website for your pizza needs. We look forward to serving
                  you delicious, fresh, and customizable pizzas.
                </p>
              </article>
            </section>
            <footer className='account-footer'>
              <Link
                href='/'
                onClick={signOut}
              >
                Log Out
              </Link>
            </footer>
          </>
        ) : (
          <section className='not-logged'>
            <h2>You are not logged in</h2>
            <Image
              src={loadingImage}
              alt='Loading...'
              priority
            />
          </section>
        )}
      </aside>
    </Layout>
  )
}
