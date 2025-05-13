"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error("Amount can not be less than zero");
        this.balance = this.balance + amount;
    }
}
let mohamed = new Account(1, 'ramadan', 100);
mohamed.deposit(-1);
console.log({ mohamed });
