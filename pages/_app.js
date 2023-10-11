import '@/styles/globals.css'
import { Header, Footer } from '@/layout'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  let router = useRouter();
  return (
    <>
      <Header route={router?.route} />
      <Component {...pageProps} />
      <Footer />
    </>)
}
