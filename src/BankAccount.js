BankAccount = function(){
  this.balance = 0;
  this.transactions = [];
};

BankAccount.prototype.deposit = function(amount, date) {
  this.balance += amount;
  this.transactions.push([amount, this.balance, date]);
};

BankAccount.prototype.withdraw = function(amount, date) {
  this.balance -= amount;
  this.transactions.push([-amount, this.balance, date]);
};
