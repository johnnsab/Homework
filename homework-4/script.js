import users from "./users.json" assert { type: "json" };
import { formatString } from "./helpers.js";

function filterUsersByBalance(users) {
  let phoneNumbersArray = [];
  users.forEach(function (user) {
    if (formatString(user.balance) > 2000) {
      phoneNumbersArray.push(user.phone);
    }
  });
  return phoneNumbersArray;
}

function getTotalBalance(users) {
  let calculateTotalBalance = users.reduce(function (acc, user) {
    let NumberBalance = formatString(user.balance);
    return acc + NumberBalance;
  }, 0);
  return calculateTotalBalance;
}

console.log(filterUsersByBalance(users));
console.log(getTotalBalance(users));
