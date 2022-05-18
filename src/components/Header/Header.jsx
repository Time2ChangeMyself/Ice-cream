import React from "react";
import {ReactComponent as ReactLogo } from '../../assets/img/logo.svg';
import {ReactComponent as SignInLogo } from '../../assets/img/signIn.svg';

import style from './Header.module.scss'
 
const Header = () => {
    return (
      <header className={style.header}>
          <a href="" className={style['logo-link']} >
            <ReactLogo/>
            </a>
            <div className={style['control-wrapper']}>
              <div className={style['sign-in']}>
                <div className={style['svg-wrap']}>
                  <SignInLogo/>
                </div>
                <a href="">Sign up</a>
                <span>/</span>
                <a href="">Sign in</a>
              </div>
              <div className={style['cart']}>
              <div className={style['svg-wrap']}>
                  <SignInLogo/>
              </div>
              <a href="">Cart</a>
              </div>
            </div>
      </header>
    )
}

export default Header;