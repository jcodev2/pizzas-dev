import Container from 'components/Container'
import Loading from 'components/Loading'
import ArrowSVG from 'components/svg/ArrowSVG'
import User from 'components/User'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect } from 'react'
import supabase from 'services/supabase'
import useSWR from 'swr'

const Pizza = dynamic(() => import('components/Pizza'), { ssr: false })

export default function PizzaPage({ pizza }) {
  const { data, error } = useSWR('pizzas', async () => {
    const { data } = await supabase.from('pizzas').select('*')
    return data
  })

  useEffect(() => {
    // pre-fetch pizza data
    supabase.from('pizzas').select('*').eq('id', pizza.id)
  }, [pizza.id])

  if (error) {
    return <div role='alert'>Error loading pizzas. Please try again later.</div>
  }

  if (!data) {
    return <Loading />
  }

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
          <User />
        </div>
      </header>

      <section className='pizza'>
        <Pizza
          key={pizza.id}
          {...pizza}
        />
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

export async function getStaticProps({ params }) {
  const { id } = params
  const { data } = await supabase.from('pizzas').select('*').eq('id', id)

  return {
    props: {
      pizza: data[0]
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
