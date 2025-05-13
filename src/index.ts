//______________________________________________________

// Intersection Type in TypeScript

type Details = {
  title: string;
  desc: string;
  price: number;
};

type Author = {
  authorName: string;
  country: string;
};

type Book = Details & Author;
// Book type has all types of Details and Author called Intersection Type

const newBook: Book = {
  title: "Black Swan",
  desc: "About black Swan",
  price: 100,
  authorName: "mohamed",
  country: "Egypt",
};

//______________________________________________________

// Literal Type

let price: 10 | 20;
// this variable accept just 10 or 20 value and don't accepted other value
price = 10;
