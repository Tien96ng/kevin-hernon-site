import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../components/Background';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Background />
      <Component {...pageProps} />
    </>

  )

}

export default MyApp
