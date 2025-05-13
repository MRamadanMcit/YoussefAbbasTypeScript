//______________________________________________________

// Unknown Type

// function  checkTypes(input: any) : void {
//   input.toUpperCase(); // string
//   input.toFixed(); // number
//   input.valueOf(); // boolean
// }
// I put any type for input parameter but if want to add unknown type replace any but I found issue so should in condition

function checkTypes(input: unknown): void {
  if (typeof input === "string") {
    input.toUpperCase();
  }
  if (typeof input === "number") {
    input.toFixed();
  }
  if (typeof input === "string") {
    input.valueOf();
  }
}

//______________________________________________________

// never type

function getErrorMSG(message: string): never {
  throw new Error(message);

  console.log("hi");
}
// the difference  between void and never type is:
// void reach to end of func but never type never reach to end of func