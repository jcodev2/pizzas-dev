import Layout from 'components/Layout'
import LoginSVG from 'components/svg/LoginSVG'
import useUser from 'hooks/useUser'
import Link from 'next/link'

const layoutProps = {
  title: 'Login - Pizzas',
  description: 'Login page for the Pizzas site',
  keywords: 'pizzas, login',
  image: '/public/img/logo.png',
  url: 'https://pizzas.vercel.app'
}

export default function Home() {
  const { signInWithGithub } = useUser()

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
        <Link
          href='/'
          onClick={signInWithGithub}
        >
          Login with Github
        </Link>
      </div>
      <div className='signup'>
        <p>Don't have an account?</p>
        <Link
          href='/'
          onClick={signInWithGithub}
        >
          Sign up with GitHub
        </Link>
      </div>
    </Layout>
  )
}
