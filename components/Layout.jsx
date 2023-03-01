import Head from 'next/head'
import Container from './Container'
import Header from './Header'

const Layout = ({ title, description, keywords, children }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='keywords'
          content={keywords}
        />
      </Head>

      <Header />

      <main>{children}</main>
    </Container>
  )
}

export default Layout
