import { useState } from "react"
import style from '../../styles/currency.module.css'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.apilayer.com/currency_data/list', 
    {
        headers:{
            "apikey": process.env.API_KEY
        }
    })
   
  
    const data = await res.json()
  
    return { props: {data}   }
  }

export default ({data})=>{
     
    const [base, setBase] = useState("USD")
    const [selected, setSelected] = useState([])
    const [showCurrencies, setShowCurrencies] = useState(true)

    function addCurrency(currency){
        setSelected(selected.concat([currency]))
    }

    function removeCurrency(currency){
        setSelected(selected.filter(e=>e != currency))
    }

    return <div className="container">
    <h1>Selecione a moeda base</h1>
    <select onChange={e=>setBase(e.target.value)} className="custom-select">
        {Object.keys(data.currencies).map(currency=>{
            if(base == currency)
                return <option selected value={currency}>{data.currencies[currency]} ({currency})</option>

            return <option value={currency}>{data.currencies[currency]} ({currency})</option>
        })}
    </select>

    <h1>Selecione uma ou mais moedas para relatar os preços em relação à moeda base</h1>
    <a onClick={()=>setShowCurrencies(!showCurrencies)}
     className={style.currency_toggle}>
        {showCurrencies?"Esconder moedas":"Mostrar moedas"}
        </a>
    <div style={{display:showCurrencies?'flex':'none'}} className={style.container_currencies}>
    
        <div className={style.currencies}>
        <h1>Moedas não seleccioadas</h1>
        <div className={style.list}>
            {Object.keys(data.currencies).map(currency=>{
                if(selected.includes(currency))
                    return
                
                if(currency == base)
                    return
                
                return <div onClick={()=>addCurrency(currency)} className={style.single_currency + " " + style.non_selected}>
                    {currency}
                    <p className={style.sign}>+</p>
                </div>
            })}
        </div>
        </div>  
        <div className={style.currencies}>
        <h1>Moedas seleccioadas</h1>
        <div className={style.list}>
            {!selected.length ? <p className={style.text}>Não tem</p> 
        : selected.map(currency=>{
            return <div onClick={()=>removeCurrency(currency)} className={style.single_currency + " " + style.selected}>
                   {currency}
                    <p className={style.sign}>-</p>
                </div>
        })    
        }
        </div>
        </div>
    </div>

        <a className="primary-button">Continuar</a>

    </div>
}