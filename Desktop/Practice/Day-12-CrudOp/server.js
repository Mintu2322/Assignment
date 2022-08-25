const express = require("express");
const app = express();
const DB = require("./db/index");
const foodModel = require("./model/food.model");
const PORT = 8000;

// connecting database
DB();

// allowing json objects
app.use(express.json());

// create route
app.post("/food", async function (req, res) {
  const food = new foodModel(req.body);
  try {
    await food.save();
    res.send("Data saved");
  } catch (error) {
    res.send(error.message);
  }
});

// get route
app.get("/food", async function (req, res) {
  // inside find will fetch all data
  // const response = await fetch(url)
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (error) {
    res.send(error);
  }
});

// update route
app.put("/food/:id", async function (req, res) {
  // after colon would be your key and value you sned from postman.
  // params are parameters.
  try {
    // findByIdAndUpdate = 2 parameters/ arguments = . 1- id , 2 - payload.
    await foodModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Data updated....!");
  } catch (error) {
    res.send(error.message);
  }
});

// delete route
app.delete("/food/:id", async function (req, res) {
  try {
    // findByIdAndDelete takes 1 argument called id.
    const food = await foodModel.findByIdAndDelete(req.params.id);
    res.send("Data deleted successfully...!");
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT, console.log("Server listening on port " + PORT));