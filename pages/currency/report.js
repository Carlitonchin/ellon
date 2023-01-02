import { useRouter } from "next/router"
import { useState } from "react"
import style from '../../styles/report.module.css'

export async function getServerSideProps({query}) {

    const {source, currencies} = query

    if(!source || !currencies)
        return { props: { data : null } }

    const res = await fetch(`https://api.apilayer.com/currency_data/live?source=${source}&currencies=${currencies}`, 
    {
        headers:{
            "apikey": process.env.API_KEY
        }
    })
   
  
    const data = await res.json()
  
    return { props: {data}   }
}

export default ({data})=>{
    if(!data){
        return <div className="container">
        <h1>Houve algum erro</h1>
        <a className="primary-button" href="/currency">Voltar</a>
        </div>
    }

    const [cant, setCant] = useState(1)

    return <div className="container">
    <div className={style.first_text}>
        Quanto custa <input onInput={e=>setCant(e.target.value)} value={cant} type="number" min="0" className={"custom-input " + style.input}/> {data.source}
    </div>
    </div>
}
