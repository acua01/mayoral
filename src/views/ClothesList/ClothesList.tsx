import { FC } from "react";
import clothes from 'assets/data/clothes.json';
import { ClothesCard } from "components/ClothesCard/ClothesCard";
import { IClothes } from "models/Clothes.model";
import { Searcher } from "components/Searcher/Searcher";
import { useClothesListController } from "./hooks/useClothesList.controller";
import { IconsBar } from "components/IconsBar/IconsBar";
import { OrderBySelector } from "components/OrderBySelector/OrderBySelector";

export const ClothesList:FC = () => {
  const {
    clothesState, 
    searcherState, 
    onChangeSearcher,
    orderByState,
    onChangeOrderBySelector
  } = useClothesListController(clothes);

  return (
    <div className="c-clothes-list">
      <form className="c-clothes-list__filters-container">
        <Searcher value={searcherState} onChange={onChangeSearcher} />
        <OrderBySelector value={orderByState} onChange={onChangeOrderBySelector} />
        <IconsBar />
      </form>
      <hr className="c-clothes-list__line"></hr>
      <ul className="c-clothes-list__clothes">
        {clothesState.map((c: IClothes, i: number) => (
          <ClothesCard key={`${c.name}-${i}`} {...c} />
        ))}
      </ul>
    </div>
  )
}