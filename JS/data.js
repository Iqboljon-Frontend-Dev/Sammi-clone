import { firstTimeLoading } from "./kirish";
console.log(firstTimeLoading);
if (firstTimeLoading == true) {
  var users = [];
  let users_Json = JSON.stringify(users);
  localStorage.setItem("users", users_Json);
  let userCount = 0;
  userCount = JSON.stringify(userCount);
  localStorage.setItem("user_Count", userCount);
}
