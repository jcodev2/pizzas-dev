import Layout from 'components/Layout'
import Navigation from 'components/Navigation'
import useUser from 'hooks/useUser'

export default function Account() {
  const { user } = useUser()

  console.log(user)

  return (
    <Layout>
      <Navigation />
    </Layout>
  )
}
