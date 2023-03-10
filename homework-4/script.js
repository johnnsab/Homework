import users from "./users.json" assert { type: "json" };
import { convertDollarsToNumber } from "./helpers.js";

function filterUsersByBalance(users) {
  let highBalanceUsers = users.filter(function (user) {
    return convertDollarsToNumber(user.balance) > 2000;
  });
  let phoneNumbersArray = highBalanceUsers.map(function (user) {
    return user.phone;
  });
  return phoneNumbersArray;
}

function getTotalBalance(users) {
  let calculateTotalBalance = users.reduce(function (acc, user) {
    let numberBalance = convertDollarsToNumber(user.balance);
    return acc + numberBalance;
  }, 0);
  return calculateTotalBalance;
}

console.log(filterUsersByBalance(users));
console.log(getTotalBalance(users));
