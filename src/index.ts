//______________________________________________________

// Objects in TypeScript
// const user1: {
//   id: number;
//   username: string;
//   email: string;
//   password: number;
//   isAdmin: boolean;
//   getFullName: (fullName: string) => string;
// } = {
//   id: 1,
//   username: "Mohamed",
//   email: "mr@gmail.com",
//   password: 123,
//   isAdmin: false,
//   getFullName: (fullName: string) => {
//     return fullName;
//   },
// };

// const user2: {
//   id: number;
//   username: string;
//   email: string;
//   password: number;
//   isAdmin: boolean;
//   getFullName: (fullName: string) => string;
// } = {
//   id: 1,
//   username: "Mohamed",
//   email: "mr@gmail.com",
//   password: 123,
//   isAdmin: false,
//   getFullName: (fullName: string) => {
//     return fullName;
//   },
// };

//______________________________________________________

// Other way to collect types in one variable type

type User = {
  readonly id: number; // readonly for not assign again
  username?: string; // ? a sign for Optional 
  email: string;
  password: number;
  isAdmin: boolean;
  getFullName: (fullName: string) => string;
};

const user1: User = {
  id: 1,
  email: "mr@gmail.com",
  password: 123,
  isAdmin: false,
  getFullName: (fullName: string) => {
    return fullName;
  },
};

// user1.id = 3;       // Error for readonly property on id

const user2: User = {
  id: 1,
  username: "Mohamed",
  email: "mr@gmail.com",
  password: 123,
  isAdmin: false,
  getFullName: (fullName: string) => {
    return fullName;
  },
};
