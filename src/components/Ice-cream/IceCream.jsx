import { Link } from 'react-router-dom'
import style from './IceCream.module.scss'

export default function IceCream({iceCream}) {
  return (
    <Link className={style.item}  to={`/product/${iceCream.id}`}>
      <li>
        <div className={style['image-wrap']}>
          <img className={style.image} src={iceCream.image} alt="ice-cream" />
        </div>
        <div className={style.description}>
          <h3 className={style.title}>{iceCream.name}</h3>
          <span className={style.price}>${iceCream.price.toFixed(2)}</span>
        </div>
      </li> 
    </Link>
  )

}