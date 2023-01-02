import Link from "next/link"

export default ()=>{
    return <header>
        <nav>
            <h1>Logo</h1>

            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/bitcoin">Bitcoins</Link></li>
                <li><Link href="/currency">Moedas Fiat</Link></li>
            </ul>
        </nav>
    </header>
}