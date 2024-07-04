import { getDiscountedPrice } from "@utils/getDiscountedPrice";

describe('getDiscountedPrice tests', () => {
  it('Return correct value', () => {
    expect(Number(getDiscountedPrice(18.99, 20).toFixed(2))).toBe(15.19);

    expect(Number(getDiscountedPrice(18.99, 0).toFixed(2))).toBe(18.99);

    expect(Number(getDiscountedPrice(0, 20).toFixed(2))).toBe(0);
  });
});
