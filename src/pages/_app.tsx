import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <title>Rock, Paper Scissors</title>
      <Component {...pageProps} />
    </>
  )
}
