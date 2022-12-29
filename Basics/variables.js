const accountId = 1227
let accountEmail ="chirag@google.com"
var accountPassword = 12345 // not use var datatype bcoz of issue in block and functional scope.
accountCity = "Jaipur"
let accountState; // not a good pratice to use like that

// accountId = 1222 //constant can't be changed(not allowed)

console.log(accountId);
accountEmail = "chirag.com"
accountPassword = "121212"
accountCity = "Pune"

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
