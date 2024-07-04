import { IClothes } from "models/Clothes.model";
import Image from "next/image";
import { FC } from "react";
import { getDiscountedPrice } from "@utils/getDiscountedPrice";
import { priceFormatter } from "@utils/priceFormatter";

export const ClothesCard: FC<IClothes> = ({image, name, price, discount, moreColors}) => {  
  return (
    <li className="c-clothes-card" role="contentinfo">
      <figure className="c-clothes-card__image-container">
        <Image src={image} width={100} height={100} layout="responsive" alt={name} title={name}/>
      </figure>
      <p className="c-clothes-card__name">{name}</p>
      <div className="c-clothes-card__price-container">
        <span className={`c-clothes-card__price-container__price ${discount ? 'line-through' : ''}`}>
          {priceFormatter(price)}
        </span>
        {discount && (
          <span className="c-clothes-card__price-container__discounted-price">
            {`${priceFormatter(getDiscountedPrice(price, discount))} (-${discount}%)`}
          </span>
        )}
      </div>
      <div className="c-clothes-card__more-colors-container">
        {moreColors && (
          <span className="c-clothes-card__more-colors-container__text">más colores</span>
        )}
      </div>
      <button className="c-clothes-card__button">Añadir</button>
    </li>
  )
}