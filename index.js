const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("server started on 3000");
});
app.get("/", (req, res) => {
  res.send("hello this is a reponse");
});
