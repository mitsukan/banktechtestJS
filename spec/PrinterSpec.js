describe("Printer", function() {

  beforeEach( function() {
    printer = new Printer();
  });

  describe("Printer functions", function() {

    it("stores a header", function() {
      expect(printer.header).toBe("date || credit || debit || balance");
    });

    it("takes an array and formats it", function() {
      expect(printer.format([10, 10, "12/12/2012"])).toBe("12/12/2012 || 10 || || 10");
    });

  });

});
