// This function getPasswordFromUser() returns incorrect result. The way this function works is getting password from user and return alert.
// User should enter value and if his value matches with value 'rockstar' return successful login. In other way login is failed.
// But when we try to execute function we get incorrect result - instead user name 'Andrew' we get underfined. What's wrong in function's code?

// ***

// function getPasswordFromUser(success, fail) {
//   let password = prompt("Password?", "");
//   if (password === "rockstar") success();
//   else fail();
// }

// let user = {
//   fName: "Andrew",

//   loginSuccess() {
//     alert(`${this.fName} logged in`);
//   },

//   loginFail() {
//     alert(`${this.fName} failed to log in`);
//   },
// };

// getPasswordFromUser(user.loginSuccess, user.loginFail);

// ***

// The problem's reason is wrong using object's method 'this'. When we pass methods loginSuccess() and loginFail() as simple arguments
// to the function getPasswordFromUser(), object for the keyword 'this' changes from 'user' to 'window'. Then instead fName : "Andrew" we get
// "undefined". In this case we have 2 solutions:
// 1) add call() or apply() to functions success() and fail() and it would looked like this:
// success.call(user)/success.apply(user) and fail.apply(user)/fail.apply(user).
// 2) wrap methods loginSuccess() and loginFail() to functions and return them as function inside function.
// In this case keyword 'this' call to the object 'user' and returns correct result.
// Right-working function will be looked like this:

function getPasswordFromUser(success, fail) {
  let password = prompt("Password?", "");
  if (password === "rockstar") success();
  else fail();
}

let user = {
  fName: "Andrew",

  loginSuccess() {
    alert(`${this.fName} logged in`);
  },

  loginFail() {
    alert(`${this.fName} failed to log in`);
  },
};

getPasswordFromUser(
  () => user.loginSuccess(),
  () => user.loginFail()
);
