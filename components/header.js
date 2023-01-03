import Link from "next/link"

export default ({routes, currentPage})=>{
    return <header>
        <nav>
            <Link href="/">
            <h3 className="logo">Ellon<span>BANK</span></h3>
            </Link>
            <ul>
                {Object.keys(routes).map(url=>{
                    return <li><Link style={{color:currentPage == url ? 'gold' : ""}} href={url}>{routes[url]}</Link></li>
                
                })}
                
            </ul>
        </nav>
    </header>
}