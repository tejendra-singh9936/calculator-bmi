# calculator-bmi
using node.js and express.js and testing using mocha and chai 

the input is in the form of array containing objects 

inputData = [ 
{ Gender: "Male", HeightCm: 171, WeightKg: 96 },
{ Gender: "Male", HeightCm: 161, WeightKg: 85 },
{ Gender: "Male", HeightCm: 180, WeightKg: 77 },
{ Gender: "Female", HeightCm: 166, WeightKg: 62 },
{ Gender: "Female", HeightCm: 150, WeightKg: 70 },
{ Gender: "Female", HeightCm: 167, WeightKg: 82 }, 
]; 

the output is displayed on the server in the tabular form containg (BMI , BMI_CATEGORY ,HEALTH RISK) 
And also the count of the number of people having BMI_CATEGORY="overWeight" 

the unit testing is done using mocha and chai which checks if the function bmiCalculator() is giving expected output or not

