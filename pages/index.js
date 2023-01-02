import Bitcoin from "../components/bitcoin"

export async function getServerSideProps() {
  // Fetch data from external API
  const res_price = await fetch('https://api.blockchain.info/ticker')
  const res_var = await fetch('https://api.blockchain.info/charts/market-price?timespan=6days&format=json')

  const price = await res_price.json()
  const variation = await res_var.json()

  return { props: {price, variation}   }
}

export default ({price, variation})=>{

  return <div className="container">
    <Bitcoin price={price} variation={variation}/>
  </div>
}