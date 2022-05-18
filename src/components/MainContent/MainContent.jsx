import style from './MainContent.module.scss'
import { ReactComponent as ReactLogo } from '../../assets/img/love.svg'
import IceCream from '../Ice-cream/IceCream'

import iceCreamAList from '../../mockData'
import { Link } from 'react-router-dom'


export default function MainContent() {
  console.log(iceCreamAList)
  return (
    <main className={style['main-content']}>
      <h1 className={style['title']}>I<div className={style["svg-wrap"]}><ReactLogo /></div>ICE CREAM</h1>
      <ul className={style['ice-cream-list']}>
        {iceCreamAList.map((iceCream)=> 
          <IceCream  iceCream={iceCream} key={iceCream.id}/>
        )}
      </ul>
    </main>
  )
}