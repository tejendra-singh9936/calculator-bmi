const chai = require("chai");
const bmiCalculator = require("../bmiCalculator");
const expect = chai.expect;

describe("bmiCalculator", () => {
  it("should calculate the BMI correctly and return a object with 3 properties(bmi,bmiCategory,helthRisk)", () => {
    expect(bmiCalculator(1.71, 96)).to.eql({
      bmiCategory: "Moderately obese",
      healthRisk: "Medium risk",
      bmi: 32.83,
    });
  });
  it("should error on negative numbers as input", () => {
    expect(bmiCalculator(-1.43, -30)).to.be.equal(
      "input parameter values must be positive numbers"
    );
  });
  it("weight or height  are Not a numbers", () => {
    expect(bmiCalculator(1.78, "hj")).to.be.equal(
      "input parameter values must be positive numbers"
    );
  });
});
