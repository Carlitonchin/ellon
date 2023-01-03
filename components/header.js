import Link from "next/link"

const Header = ({routes, currentPage})=>{
    return <header>
        <nav>
            <Link href="/">
            <h3 className="logo">Ellon<span>BANK</span></h3>
            </Link>
            <ul>
                {Object.keys(routes).map(url=>{
                    return <li key={url}><Link style={{color:currentPage == url ? 'gold' : ""}} href={url}>{routes[url]}</Link></li>
                
                })}
                
            </ul>
        </nav>
    </header>
}

export default Header