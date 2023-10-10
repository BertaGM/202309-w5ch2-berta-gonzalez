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
});
