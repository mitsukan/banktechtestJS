describe("BankAccount", function() {

  beforeEach(function() {
    account = new BankAccount();
  });

  it("should have a default balance of 0", function() {
    expect(account.balance).toBe(0);
  });

  describe("bank account functions", function(){

    it("should be able to deposit money", function() {
      account.deposit(10);
      expect(account.balance).toBe(10);
    });

    it("should be able to withdraw money", function() {
      account.withdraw(10);
      expect(account.balance).toBe(-10);
    });

    it("Deposit function also adds a transaction", function() {
      account.deposit(10, "12/12/2012");
      expect(account.transactions).toEqual([[10, 10, "12/12/2012"]]);
    });

    it("Withdraw function also adds a transaction", function() {
      account.withdraw(10, "12/12/2012");
      expect(account.transactions).toEqual([[-10, -10, "12/12/2012"]]);
    });

  });

});
