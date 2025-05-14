//______________________________________________________

// OOP - instanceof keyword

class Account {
  readonly id: number; // can not be reassign
  owner: string;
  balance: number;
  username?: string; // optional coz i don't want to add in constructor

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error("Amount can not be less than zero");
    this.balance = this.balance + amount;
  }
}

let mohamed = new Account(1, "ramadan", 100);
// mohamed.id = 2; // error for id is readonly
console.log({ instanceof: mohamed instanceof Account });  // { instanceof: true }
