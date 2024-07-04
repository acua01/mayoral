import { IClothes } from "models/Clothes.model";
import { getDiscountedPrice } from "./getDiscountedPrice";

export const sortClothes = (clothes: IClothes[], order: string): IClothes[] => {
  const result = [...clothes];
  if(order === 'asc'){
    result.sort((a, b) => {
      const finalPriceA = a.discount ? getDiscountedPrice(a.price, a.discount) : a.price;
      const finalPriceB = b.discount ? getDiscountedPrice(b.price, b.discount) : b.price;
      
      return finalPriceA - finalPriceB;
    });
  }else{
    result.sort((a, b) => {
      const finalPriceA = a.discount ? getDiscountedPrice(a.price, a.discount) : a.price;
      const finalPriceB = b.discount ? getDiscountedPrice(b.price, b.discount) : b.price;
      
      return finalPriceB - finalPriceA;
    });
  }
  
  return result;
}