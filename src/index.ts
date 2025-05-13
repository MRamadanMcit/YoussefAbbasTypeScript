//______________________________________________________

// Union Type in TypeScript

let review: number | string = 124;
// To allow using a variable 2 types
review = "mohamed";

function getRating(rate: number | string): number | string {
  if (typeof rate === "number") {
    return 123;
  } else {
    return "mohamed";
  }
}
