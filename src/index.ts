//______________________________________________________

let price: number = 10;

// Any type
let title: any = 10; // It's supposed we use rarely
title = "mizo";
title = false;

let book; // It takes any type as default
book = "programming";
book = 20;

function logger(input: any) {
  console.log("Hello World");
}
