import { IClothes } from 'models/Clothes.model';
import { useEffect, useState } from 'react';
import { sortClothes } from '@utils/sortClothes';
import { TSelectOption } from '@components/Select/Select';

export const useClothesListController = (clothes: IClothes[]) => {
  const [clothesState, setClothesState] =
    useState<IClothes[]>(clothes);
  const [searcherState, setSearcherState] = useState<string>('');
  const [orderByState, setOrderByState] = useState<string>('asc');

  const orderByOptions: TSelectOption[] = [
    {text: 'Precio - asc', value: 'asc'},
    {text: 'Precio - desc', value: 'desc'}
  ];


  const onChangeSearcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearcherState(value);

    const clothesFiltered = clothes.filter((c) =>
      c.name.toLocaleLowerCase().includes(value.toLowerCase()),
    );
    setClothesState(sortClothes(clothesFiltered, orderByState));
  };

  const onChangeOrderBySelector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderByState(e.target.value);
  }

  useEffect(() => {
    setClothesState(prev => sortClothes(prev, orderByState))
  }, [orderByState]);

  return {
    clothesState,
    searcherState,
    onChangeSearcher,
    orderByState,
    orderByOptions,
    onChangeOrderBySelector
  };
};
