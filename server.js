const express = require("express");

const itemsRouter = require("./route/items.js");

const app = express();

const port = 3000;

// app.get("/user", (req, res) => {
//   res.send("Hello world");
// });

// to create route for the items route or endpoint
app.use("/items", itemsRouter);

app.listen(3000, () => {
  console.log(
    `App running on ${port}. Click localhost:${port} to view the app`
  );
});

// app.listen(6000, function () {
//   console.log("App listening on port 3000");
// });
