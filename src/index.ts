//______________________________________________________

// OOP - Class & Object

class Account {
  id: number; // property
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id; // this refer to Object not class
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    // Method
    if (amount < 0) throw new Error("Amount can not be less than zero");
    // for amount can not be less than 0
    this.balance = this.balance + amount;
  }
}

let mohamed = new Account(1, "ramadan", 100); // () refer to constructor
// console.log({mohamed});// { mohamed: Account { id: 1, owner: 'ramadan', balance: 100 } }
mohamed.deposit(200);
console.log({ mohamed }); // { mohamed: Account { id: 1, owner: 'ramadan', balance: 300 } }
