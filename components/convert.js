import { useState } from 'react'
import style from '../styles/components/convert.module.css'

const Convert = ({price}) =>{
    const [btc, setBtc] = useState(1)
    const [fiat, setFiat] = useState(price["USD"]["last"])
    const [currency_selected, setCurrency] = useState("USD")

    function changeBtc(e){
        let value = price[currency_selected]["last"]
        let new_btc = Number(e.target.value)
        let new_fiat = new_btc * value 
        setBtc(new_btc)
        setFiat(parseFloat(new_fiat.toFixed(2)))
    }

    function changeFiat(e){
        let value = price[currency_selected]["last"]
        let new_fiat = Number(e.target.value)
        let new_btc = new_fiat/value

        setFiat(new_fiat)
        setBtc(parseFloat(new_btc.toFixed(7)))
    }

    function changeSelect(e){
        
        let value = price[e.target.value]["last"]
        setCurrency(e.target.value)
        let new_fiat = btc * value
        setFiat(parseFloat(new_fiat.toFixed(2)))
    }

    return <>
        <h1>Conversor Online</h1>
        <div className={style.container}>
        <div className={style.single_currency}>
        <input onInput={changeBtc} value={btc} type="number" className={"custom-input " + style.input } min="0"/>
        <h1 className={style.btc_currency}>BTC</h1>
        </div>
        <div className={style.single_currency}>
        <input onInput={changeFiat} value={fiat} type="number" className={"custom-input " + style.input_fiat + " " + style.input} min="0"/>
        <select onChange={changeSelect} className={"custom-select " + style.select}>
            {Object.keys(price).map(currency=>{
                if(currency == currency_selected)
                    return <option key={currency} value={currency} selected>{currency}</option>

                return <option key={currency} value={currency}>{currency}</option>
            })}
        </select>
        </div>
        </div>
    </>
}

export default Convert