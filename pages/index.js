/* eslint-disable react/no-unescaped-entities */
import { Inter } from '@next/font/google'
import Layout from 'components/Layout'
import LoginSVG from 'components/svg/LoginSVG'
import useUser from 'hooks/useUser'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const layoutProps = {
  title: 'Login - Pizzas',
  description: 'Login page for the Pizzas site',
  keywords: 'pizzas, login'
}

export default function Home() {
  const { user, loading, signInWithGithub, signOut } = useUser()

  console.log('user', user)
  console.log('loading', loading)

  return (
    <Layout {...layoutProps}>
      <div className='svg-img'>
        <LoginSVG />
      </div>
      <div className='introduction'>
        <h2>Get the best pizzas with us</h2>
        <p>
          We have the freshest ingredients, added to the most professional chefs
          in the city, ready to satisfy the taste of your palate.
        </p>
      </div>
      <div className='login'>
        <Link href='/login'>Login with Github</Link>
      </div>
      <div className='signup'>
        <p>Don't have an account?</p>
        <Link href='/signup'>Sign up with GitHub</Link>
      </div>

      <Link onClick={signInWithGithub} href='/'>
        Sign in with GitHub
      </Link>
    </Layout>
  )
}
