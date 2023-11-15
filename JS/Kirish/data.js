console.log(1);
if (firstTimeLoading == true) {
  var users = [];
  let users_Json = JSON.stringify(users);
  localStorage.setItem("users", users_Json);
  let userCount = 0;
  userCount = JSON.stringify(userCount);
  localStorage.setItem("user_Count", userCount);
}

import { firstTimeLoading } from "./kirish.js";
