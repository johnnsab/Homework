// Write a function that accepts 1 parameter and sums up with what was passed the first time, etc. All this with closures

// function makeSum() {
//   let num = 0;
//   return function add(value) {
//     return (num += value);
//   };
// }
// const sum = makeSum();

const makeSum = () => {
  let num = 0;
  return (value) => (num += value);
};

const sum = makeSum();

// Using a closure, write the structureUserInfo function, which collects the user info object from the arguments.

// function UserInfo(name) {
//   return function (role) {
//     return {
//       name: name,
//       role: role,
//     };
//   };
// }

const userInfo = (name) => (role) => ({ name: name, role: role });
