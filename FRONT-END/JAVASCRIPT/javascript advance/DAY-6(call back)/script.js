function abc(username, callback) {
  console.log(username);
  callback({ id: 221 }, "kolkata", function (state, callback) {
    console.log("hello", state);
    callback("india");
  });
}
abc("sahil", function (id, city, callback) {
  console.log(id, city);
  callback("west bengal", function (country) {
    console.log(country);
  });
});
