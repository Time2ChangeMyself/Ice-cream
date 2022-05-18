import style from './Footer.module.scss'
import {ReactComponent as ReactLogo} from '../../assets/img/logo.svg';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
      <a href="./index.html" className={style['logo-link']} >
        <ReactLogo/>
      </a>
      <ul className={style["link-list"]}>
        <li className={style["link-list__item"]}><a href="">Our Products</a></li>
        <li className={style["link-list__item"]}><a href=''>Privacy Terms</a></li>
        <li className={style["link-list__item"]}><a href=''>Twitter</a></li>
        <li className={style["link-list__item"]}><a href=''>Facebook</a></li>
        <li className={style["link-list__item"]}><a href=''>Email</a></li>
      </ul>
      </div>
      <div className={style.rigths}>
      <div className='container'>© 2021 Justice-team. All rights reserved.</div>
      </div>
    </footer>
  )
}