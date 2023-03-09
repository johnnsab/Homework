import users from "./users.json" assert { type: "json" };

function getUserInfo(users) {
  let phoneNumbersArray = [];
  for (let i = 0; i < users.length; i++) {
    let deleteMarkDollar = users[i].balance.slice(1);
    let convertToNumber = Number(deleteMarkDollar.replace(",", ""));
    if (convertToNumber > 2000) {
      phoneNumbersArray.push(users[i].phone);
    }
  }
  return phoneNumbersArray;
}

console.log(getUserInfo(users));
