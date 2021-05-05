const bmiCalculator = (height, weight) => {
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    return "input parameter values must be positive numbers";
  }
  const bmi = Math.round((weight / Math.pow(height, 2)) * 100) / 100;
  let bmiCategory;
  let healthRisk;

  if (bmi <= 18.4) {
    bmiCategory = "Underweight";
    healthRisk = "Malnutrition risk";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal weight";
    healthRisk = "Low risk";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Overweight";
    healthRisk = "Enhanced risk";
  } else if (bmi >= 30 && bmi < 34.9) {
    bmiCategory = "Moderately obese";
    healthRisk = "Medium risk";
  } else if (bmi >= 35 && bmi < 39.9) {
    bmiCategory = "Severely obese";
    healthRisk = "High risk";
  } else {
    bmiCategory = "Very severely obese";
    healthRisk = "Very high risk";
  }
  return {
    bmiCategory: bmiCategory,
    healthRisk: healthRisk,
    bmi: bmi,
  };
};
module.exports = bmiCalculator;
