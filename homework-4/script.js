import users from "./users.json" assert { type: "json" };
import formatString from "./helpers.js";

function getUserInfo(users) {
  let phoneNumbersArray = users.reduce(function (result, user) {
    if (formatString(user.balance) > 2000) {
      result.push(user.phone);
    }
    return result;
  }, []);
  return phoneNumbersArray;
}

console.log(getUserInfo(users));
