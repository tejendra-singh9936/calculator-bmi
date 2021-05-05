const { default: axios } = require("axios");
const express = require("express");
const bmiCalculator = require("./bmiCalculator");
const app = express();

app.use(express.json());

app.set("views", "./views");
app.set("view engine", "ejs");

const inputData = [
  { Gender: "Male", HeightCm: 171, WeightKg: 96 },
  { Gender: "Male", HeightCm: 161, WeightKg: 85 },
  { Gender: "Male", HeightCm: 180, WeightKg: 77 },
  { Gender: "Female", HeightCm: 166, WeightKg: 62 },
  { Gender: "Female", HeightCm: 150, WeightKg: 70 },
  { Gender: "Female", HeightCm: 167, WeightKg: 82 },
];

app.get("/bmi", (req, res) => {
  let bmiData = [];
  let noOfOverWeightPeople = 0;
  inputData.filter((currentData) => {
    let weight = Number(currentData.WeightKg);
    let height = Number(currentData.HeightCm) / 100;
    let data = bmiCalculator(height, weight);

    if (data.bmiCategory === "Overweight") {
      noOfOverWeightPeople = noOfOverWeightPeople + 1;
    }
    bmiData.push(data);
  });

  res.render("index", { bmiData: bmiData, count: noOfOverWeightPeople });
});

app.listen(8080, () => {
  console.log("server is connected to port 8080");
});
