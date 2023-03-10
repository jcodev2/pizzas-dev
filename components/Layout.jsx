import { MenuContext } from 'context/menu'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useContext } from 'react'
import Container from './Container'
import GoTop from './GoTop'
import Header from './Header'

const CircleIndicator = dynamic(() => import('components/ProgressBar'), {
  ssr: false
})

const Layout = ({ title, description, keywords, image, url, children }) => {
  const { setIsOpen } = useContext(MenuContext)

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          name='keywords'
          content={keywords}
        />

        {/* og meta data */}
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='og:image'
          content={image}
        />
        <meta
          property='og:url'
          content={url}
        />
        <meta
          property='og:type'
          content='website'
        />
      </Head>

      <CircleIndicator />

      <Header />

      <main onClick={() => setIsOpen(false)}>{children}</main>

      <GoTop />
    </Container>
  )
}

export default Layout
