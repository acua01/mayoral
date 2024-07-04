import { priceFormatter } from "@utils/priceFormatter";
import { sortClothes } from "@utils/sortClothes";

const data = [
  {
    "name": "Test 1",
    "price": 18.99,
    "discount": 20,
    "moreColors": true,
    "image": "/image.png"
  },
  {
    "name": "Conjunto 2 piezas rayas Better Cotton niño",
    "price": 25.99,
    "discount": 30,
    "moreColors": false,
    "image": "/images/Conjunto 2 piezas rayas Better Cotton niño 2.png"
  },
  {
    "name": "Conjunto 3 piezas sport Better Cotton niño",
    "price": 22.99,
    "discount": 20,
    "moreColors": true,
    "image": "/images/Conjunto 3 piezas sport Better Cotton niño.png"
  },
]

describe('sortClothes tests', () => {
  it('Return correct value', () => {
    expect(sortClothes([], 'asc')).toBe("€");
  });
});
