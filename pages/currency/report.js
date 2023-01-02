import { useRouter } from "next/router"

export default ()=>{
    const router = useRouter()
    const {source, currencies} = router.query

    if(!source || !currencies)
        return <>
        <h1>Houve algum erro</h1>
        <a href="currency">Voltar</a>
        </>
    return <h1>Report</h1>
}