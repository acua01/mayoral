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
    "name": "Test 2",
    "price": 25.99,
    "moreColors": false,
    "image": "/image.png"
  },
  {
    "name": "Test 3",
    "price": 22.99,
    "discount": 10,
    "moreColors": true,
    "image": "/image.png"
  },
];

describe('sortClothes tests', () => {
  it('Return correct value with asc order', () => {
    expect(sortClothes(data, 'asc')[0].name).toBe("Test 1");
    expect(sortClothes(data, 'asc')[1].name).toBe("Test 3");
    expect(sortClothes(data, 'asc')[2].name).toBe("Test 2");
  });

  it('Return correct value with desc order', () => {
    expect(sortClothes(data, 'desc')[0].name).toBe("Test 2");
    expect(sortClothes(data, 'desc')[1].name).toBe("Test 3");
    expect(sortClothes(data, 'desc')[2].name).toBe("Test 1");
  });
});
