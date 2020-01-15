 //Solution to square of a number 
 const squareNumber = (number) => {
     const squared = number * number;
     console.log("The result of squaring " + number + " is " + squared);
     return squared;
 }



 //test cases
 //  console.log(squareNumber(100.56));



 //Solution to Half Number problem
 const halfNumber = number => {
         console.log("Half of " + number + " is " + (number / 2));
         return (number / 2);
     }
     //  console.log(halfNumber(402));


 //Percentage Calculation

 const percent = (firstNum, secondNum) => {
     const percentage = (firstNum * 100) / secondNum;
     console.log(firstNum + " is " + percentage + "% of " + secondNum);
     return percentage;

 }

 //test case for percentage
 //  console.log(percent(50, 300));


 //Area of a Circle
 const areaOfCircle = (radius) => {
     const area = (Math.PI * radius * radius).toFixed(2);
     console.log("The area of Circle with radius " + radius + " is " + area);
     return area;
 }

 //   console.log(areaOfCircle(2));


 // Last part of the question
 const combinationFunction = (number) => {
     const result = halfNumber(number);
     const squaredResult = squareNumber(result);
     const areaCircle = areaOfCircle(squaredResult);
     const percentage = percent(squaredResult, areaCircle);
     return;
     //  return (result + "\n" + squaredResult + "\n" + areaCircle + "\n" + percent);
 }

 console.log(combinationFunction(4));