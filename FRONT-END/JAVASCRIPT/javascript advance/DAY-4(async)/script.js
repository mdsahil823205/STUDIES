// function loginUser(username, cb) {
//     console.log("login user")
//   setTimeout(() => {
//     cb({ id: 123, username: "mohammed" });
//   }, 2000);
// }

// function fetchpermission(id, cb) {
//     console.log("fetching permission")
//   setTimeout(() => {
//     cb(["read", "write", "print", "update"]);
//   }, 3000);
// }
// function dashborad(permission,cb) {
//     console.log("loading dashboard")
//     setTimeout(()=>{
//         cb()
//     },4000)
// }
// loginUser("sahil", function (userdata) {
//   fetchpermission(userdata.id, function (permission) {
//     dashborad(permission, function () {
//       console.log("permission loaded");
//     });
//   });
// });

// window.alert("hello");
localStorage.setItem("name", "sahil");
localStorage.removeItem("name");
localStorage.setItem("id", "22042723016");
localStorage.setItem("name","haider")
