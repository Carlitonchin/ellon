import Link from "next/link"
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

const Report = ({data})=>{

    const [cant, setCant] = useState(1)
    
    if(!data){
        return <div className="container">
        <h1>Houve algum erro</h1>
        <Link className="primary-button" href="/currency">Voltar</Link>
        </div>
    }

    return <div className="container">
    <div className={style.first_text}>
        <h1>Quanto custa <input onInput={e=>setCant(e.target.value)} value={cant} type="number" min="0" className={"custom-input " + style.input}/> {data.source}</h1>
    </div>
    <div className={style.container_quotes}>
        {Object.keys(data.quotes).map(c=>{
            let money = data.quotes[c] * cant
            money = money.toFixed(3)
            return <div key={c} className={style.single_quote}>
               <h2>{money}</h2> <h2 className={style.currency}>{c.substring(data.source.length)}</h2>
            </div>
        })}
        
    </div>

    <Link className={"primary-button " + style.button} href="/currency">Fazer mais outro reporte</Link>
    </div>
}

export default Report