import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,800&display=swap'
          rel='stylesheet'
        />
        <meta
          name='theme-color'
          content='#ef9a53'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
