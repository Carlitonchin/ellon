import Convert from '../components/convert'
import style from '../styles/bitcoin.module.css'

export async function getServerSideProps() {
    // Fetch data from external API
    const res_price = await fetch('https://api.blockchain.info/ticker')
    const res_var = await fetch('https://api.blockchain.info/charts/market-price?timespan=6days&format=json')
  
    const price = await res_price.json()
    const variation = await res_var.json()
  
    return { props: {price, variation}   }
  }

export default ({price, variation})=>{
    return <div className='container'>
        <h1><span className={style.price}>1</span> <span className={style.currency}>BTC</span>
        {" = "}
        <span className={style.price}>{price["USD"]['last']}</span> <span className={style.currency}>USD</span>
        </h1>
        <h1 className={style.last7text}>Nos últimos 7 días</h1>
        <div className={style.graph}>
                {variation['values'].reverse().map((element, index)=>{
                    let value = element['y']

                    if(index == 0)
                        value = price["USD"]["last"]

                    return  <div className={style.bar_container}>
                    <p className={style.bar_value}>{value} USD</p>
                    <div className={style.bar} style={{height:`${(element['y']/price["USD"]['last'])*25}rem`}}>
                       
                    </div>
                    <div className={style.number_bar}>{index == 0 ? "Hoje" : index + " D"}</div>
                    </div>
                })}
           
            
        </div>
        <Convert price={price}/>
    </div>
}