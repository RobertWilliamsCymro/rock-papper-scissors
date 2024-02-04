import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;600;700&display=swap');
        </style>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
