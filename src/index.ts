//______________________________________________________

// Functions in TypeScript

// Without return type (void)
function sum1(number1: number, number2: number): void {
  const res = number1 + number2;                           // Type of func is avoid so we can't add return to this func
}

// with return type
function sum2(number1: number, number2: number): number {
  const res = number1 + number2;
  return res;
}

const result1 = sum1(1, 2);
console.log({ "Without return type (void): ": result1 }); // undefined

const result2 = sum2(1, 2);
console.log({ "With return type: ": result2 }); // 3

//______________________________________________________

function getFullname(first: string, second: string, third: string) {   // third param is non use
  const username = "mohamed";            // variable non use
  return first + " " + second;
}
// tsconfig file convert noUnusedLocals to "noUnusedLocals": true for add warning to any variable user non use
// tsconfig file convert noUnusedParameters to "noUnusedParameters": true for add warning to any parameter user non use