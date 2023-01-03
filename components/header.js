import Link from "next/link"
import { useEffect } from "react"

const Header = ({routes, currentPage})=>{

    function close_menu_if_possible(){
        let menu_mobile = document.getElementById("menu_mobile")

        if(menu_mobile.classList.contains('show-menu-mobile')){
            menu_mobile.classList.remove('show-menu-mobile')
            return true
        }

        return false
    }

    function show_menu_if_possible(){
        let menu_mobile = document.getElementById("menu_mobile")

        if(!menu_mobile.classList.contains('show-menu-mobile')){
            menu_mobile.classList.add('show-menu-mobile')

            return true
    }
    return false
}

    function toggle_menu(){
        if(!close_menu_if_possible())
            show_menu_if_possible()
    }
            

    useEffect(()=>{
        window.addEventListener('click', (e)=>{
            console.log(e.target.id)
            if(e.target.id == 'menu_mobile')
                return

            else if(e.target.id == "menu_icon" || e.target.id == "container_menu_icon"){
                return
            }
            
            else
                close_menu_if_possible()
            
        })
    })

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
            
            <div id="container_menu_icon" onClick={toggle_menu}>
            <svg id="menu_icon" className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
        </nav>

    </header>
}

export default Header