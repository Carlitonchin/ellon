import Header from '../components/header'
import '../styles/globals.css'
import '../styles/header.css'

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  </>
}
