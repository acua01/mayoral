import { FC } from "react";
import { ClothesCard } from "@components/ClothesCard/ClothesCard";
import { IClothes } from "models/Clothes.model";
import { Searcher } from "@components/Searcher/Searcher";
import { useClothesListController } from "./hooks/useClothesList.controller";
import { IconsBar } from "@components/IconsBar/IconsBar";
import { Select } from "@components/Select/Select";

export const ClothesList:FC<{clothes: IClothes[]}> = ({clothes}) => {
  const {
    clothesState, 
    searcherState, 
    onChangeSearcher,
    orderByState,
    orderByOptions,
    onChangeOrderBySelector
  } = useClothesListController(clothes);

  return (
    <div className="c-clothes-list">
      <form className="c-clothes-list__filters-container" aria-label="filter">
        <Searcher value={searcherState} onChange={onChangeSearcher} />
        <Select
          label={"Ordenar:"}
          value={orderByState} 
          onChange={onChangeOrderBySelector} 
          options={orderByOptions}
        />
        <IconsBar />
      </form>
      <hr className="c-clothes-list__line"></hr>
      {clothesState.length > 0 ? (
        <ul className="c-clothes-list__clothes">
          {clothesState.map((c: IClothes, i: number) => (
            <ClothesCard key={`${c.name}-${i}`} {...c} />
          ))}
        </ul>
      ) : (
        <p>No se han encontrado resultados</p>
      )}
    </div>
  )
}