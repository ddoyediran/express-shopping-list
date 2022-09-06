const express = require("express");

const router = express.Router();

// Problem 1: GET /items - this should respond with a list of shopping items.
router.get("/", (req, res) => {
  res.send(items);
});

// Problem 2: POST /items - this route should accept form data and add it to the shopping list.
router.post("/", (req, res) => {
  items.push(req.body.item);
  res.send("Item successfully added");
});

/// Problem 3, 4, 5: GET /items/:id - this route should display a single item's name and price
// PATCH /items/:id - this route should accept edits to existing items.
// DELETE /items/:id - this route should allow you to delete a specific item from the array.
router
  .route("/:id")
  .get((req, res) => {
    res.send(req.item);
  })
  .patch((req, res) => {
    let item = items[req.params.id];
    item.name = req.body.name;
    item.price = req.body.price;
    res.send("Item updated");
  })
  .delete((req, res) => {
    items.splice(req.params.id, 1);
    res.send("Item successfully removed");
  });

// to get the params
router.param("id", (req, res, next, id) => {
  req.item = items[id];
  next();
});

const items = [
  { name: "apple", price: 26 },
  { name: "banana", price: 20 },
  { name: "rice", price: 28 },
  { name: "tomatoes", price: 40 },
  { name: "salt", price: 11 },
];

module.exports = router;
