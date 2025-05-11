// node dist/index.js                    // To print console in terminal

//______________________________________________________

// Enum in TypeScript

// Js Way
const small = 0;
const medium = 1;
const large = 2;

// TS Way
// enum size {
//   small,
//   medium,
//   large,
// }

// enum size {
//   small,
//   medium = 5,
//   large,
// }
// we can assign number in enum and next variable takes a sequence number by default and once if add string to one variable we should add to others

enum size {
  small = "small",
  medium = "medium",
  large = "large",
}

const mySize: size = size.medium;
console.log({ mySize });
