import Link from "next/link"

const Header = ({routes, currentPage})=>{
    return <header>
        <nav>
            <Link href="/">
            <h3 className="logo">Ellon<span>BANK</span></h3>
            </Link>
            <ul className="menu-pc">
                {Object.keys(routes).map(url=>{
                    return <li key={url}><Link style={{color:currentPage == url ? 'gold' : ""}} href={url}>{routes[url]}</Link></li>
                
                })}
                
            </ul>

            <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </nav>

        <ul className="menu-mobile">
                {Object.keys(routes).map(url=>{
                    return <li key={url}><Link style={{color:currentPage == url ? 'gold' : ""}} href={url}>{routes[url]}</Link></li>
                
                })}
                
            </ul>
    </header>
}

export default Header