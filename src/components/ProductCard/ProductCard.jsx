import React from "react";
import { useLocation, useParams } from "react-router-dom";
import iceCreamAList from '../../mockData'

import style from './ProductCard.module.scss'


export default function ProductCard() {
const params = useParams();
console.log(iceCreamAList.find(el=> el.id==params.id))
const currentProduct = iceCreamAList.find(el=> el.id==params.id);

  return (
    <main className={`${style["style"]} contaier`}>
      <section className={style["product-card"]}>
        <nav className="navigator"></nav>
        <div className="product-info">
          <div className="product__image-wrap">
            <img src={currentProduct.image} alt="" />
          </div>
          <div className="product__description">
            <div className="product__index">SKU: BXD100BLK</div>
            <h2 className="product__title"></h2>
            <div className="product__text">
              <b>Description</b>
              <p>Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.
  
  Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.</p>
            </div>
            <div className="product__add">
              <span className="product__price">${currentProduct.price.toFixed(2)}</span>
              <div className="product__controlls">
                <button className="button"></button>
                <span className="product__amount">{}</span>
                <button className="button"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}