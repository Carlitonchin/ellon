import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  const path = useRouter().pathname

  const routes = {
    "/":"Inicio",
    "/bitcoin":"Bitcoin",
    "/currency":"Moedas Fiat"
  }

  const [currentPage, setCurrentPage] = useState(null)

  if(path == "/" && currentPage != "/")
    setCurrentPage("/");
  
  else if(path.startsWith("/bitcoin") && currentPage != "/bitcoin")
    setCurrentPage("/bitcoin")
  
  else if(path.startsWith("/currency") && currentPage != "/currency")
    setCurrentPage("/currency")

  useEffect(()=>{

    window.addEventListener('hashchange', e => {
      let path = e.newURL

      if(path == "/" && currentPage != "/")
    setCurrentPage("/");
  
  else if(path.startsWith("/bitcoin") && currentPage != "/bitcoin")
    setCurrentPage("/bitcoin")
  
  else if(path.startsWith("/currency") && currentPage != "/currency")
    setCurrentPage("/currency")
    })
  })

  return <>
  <Header routes={routes} currentPage={currentPage}/>
  <ul id="menu_mobile" className="menu-mobile">
        
        {Object.keys(routes).map(url=>{
            return <li key={url}><Link style={{color:currentPage == url ? 'gold' : ""}} href={url}>{routes[url]}</Link></li>
        
        })}
        
    </ul>
  <Component {...pageProps} />
  <Footer/>
  </>
}
