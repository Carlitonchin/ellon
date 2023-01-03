import Link from 'next/link'
import style from '../styles/index.module.css'

const Index = ()=>{

  return <div className={"container " + style.container}>
  <h1 className={style.title}>
      O Trading é mais fácil com dados</h1>

    <p className={style.text}>Use nossas ferramentas online e torne-se um trader profissional</p>

    <div className={style.container_buttons}>
      <Link className={'primary-button ' + style.button} href="/bitcoin">Explore os dados de Bitcoin</Link>
      <Link className={'primary-button secondary ' + style.button } href="/currency">Conheça o mercado das moedas fiat</Link>
    </div>
  </div>
}

export default Index