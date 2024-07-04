import { priceFormatter } from "@utils/priceFormatter";

describe('priceFormatter tests', () => {
  it('Return correct format', () => {
    expect(priceFormatter(18.99).charAt(priceFormatter(18.99).length - 1)).toBe("€");
  });
});
