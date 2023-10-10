import strictEquals from "./strict-equals";

describe("Given a strictEquals function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const ValueB = 1;

      const result = true;

      const hasEqualsValues = strictEquals(valueA, ValueB);

      expect(hasEqualsValues).toBe(result);
    });
  });

  describe("When it receives Nan and NaN", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;

      const result = false;

      const hasEqualsValues = strictEquals(valueA === valueB);

      expect(hasEqualsValues).toBe(result);
    });
  });

  describe("When it receives 0 and -0", () => {
    test("Then it should return true", () => {
      const valueA = 0;
      const valueB = -0;

      const result = true;

      const hasEqualsValues = strictEquals(!valueA, !valueB);

      expect(hasEqualsValues).toBe(result);
    });
  });

  describe("When it receives -0 and 0", () => {
    test("Then it should return true", () => {
      const valueA = -0;
      const valueB = 0;

      const result = true;

      const hasEqualsValues = strictEquals(!valueA, !valueB);

      expect(hasEqualsValues).toBe(result);
    });
  });
});
