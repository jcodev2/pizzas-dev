import Container from 'components/Container'
import Pizza from 'components/Pizza'
import ArrowSVG from 'components/svg/ArrowSVG'
import UserSVG from 'components/svg/UserSVG'
import useUser from 'hooks/useUser'
import Image from 'next/image'
import Link from 'next/link'
import supabase from 'services/supabase'

export default function PizzaPage({ pizza }) {
  const { user } = useUser()

  console.log(pizza)

  return (
    <Container>
      <header className='header'>
        <Link
          href='/menu'
          className='menu arrow'
        >
          <ArrowSVG />
        </Link>
        <div className='logo in-case'>
          <h1 className='cl-white'>Love Pizza</h1>
        </div>
        <div className='user'>
          {user ? (
            <Image
              src={user.user_metadata.avatar_url}
              alt='user avatar'
              width={40}
              height={40}
              priority
            />
          ) : (
            <UserSVG />
          )}
        </div>
      </header>

      <section className='pizza'>
        {pizza.map(
          ({
            id,
            name,
            ingredients,
            price,
            rating,
            weight,
            kilocalories,
            image
          }) => (
            <Pizza
              key={id}
              name={name}
              ingredients={ingredients}
              price={price}
              rating={rating}
              weight={weight}
              kilocalories={kilocalories}
              image={image}
              id={id}
            />
          )
        )}
      </section>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const { data } = await supabase.from('pizzas').select('id')

  const paths = data.map((pizza) => ({
    params: { id: pizza.id.toString() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const { data } = await supabase.from('pizzas').select('*').eq('id', id)

  return {
    props: {
      pizza: data
    }
  }
}
