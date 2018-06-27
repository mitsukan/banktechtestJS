describe("Printer", function() {

  beforeEach( function() {
    printer = new Printer();
  });

  describe("Printer functions", function() {

    it("stores a header", function() {
      expect(printer.header).toBe("date || credit || debit || balance");
    });

  });

});
