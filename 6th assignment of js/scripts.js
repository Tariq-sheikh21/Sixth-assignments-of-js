// Using arrays to create a 2D array
let empty2DArray = [[]];

// Initializing with specific sizes
let empty2DArrayWithSize = Array.from({ length: 3 }, () => []);

// Similarly, for a 3D array
let empty3DArray = [[[]]];

// Initializing with specific sizes
let empty3DArrayWithSize = Array.from({ length: 4 }, () => Array.from({ length: 3 }, () => []));



// Declare and initialize a 2D array representing the matrix
const matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  
  // Accessing elements in the matrix
  console.log(matrix[0][2]);  // Output: 2
  console.log(matrix[1][3]);  // Output: 2
  console.log(matrix[2][1]);  // Output: 1

  
//   Write a program to print 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
   
  

//   Create a table to show a multiplication of two number


// Taking input from the user
const number = prompt("Enter a number to show its multiplication table:");
const tableLength = prompt("Enter the length of the multiplication table:");

// Converting input to numbers
const num = parseInt(number);
const length = parseInt(tableLength);

// Checking if the input is a valid number
if (isNaN(num) || isNaN(length)) {
  console.log("Please enter valid numbers.");
} else {
  // Printing the multiplication table
  console.log(`Multiplication table for ${num} up to ${length} terms:`);
  for (let i = 1; i <= length; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}



// Define the array of fruits
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Print items with index using a for loop
console.log("Printing items with index using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Element at Index ${i} is ${fruits[i]}`);
}


// Generate the following series in your browser

// Function to generate and display the series
function generateSeries() {
    // a. Counting
    let countingSeries = "Counting: ";
    for (let i = 1; i <= 15; i++) {
      countingSeries += i + ", ";
    }

    // b. Reverse counting
    let reverseCountingSeries = "Reverse Counting: ";
    for (let i = 10; i >= 1; i--) {
      reverseCountingSeries += i + ", ";
    }

    // c. Even
    let evenSeries = "Even: ";
    for (let i = 0; i <= 20; i += 2) {
      evenSeries += i + ", ";
    }

    // d. Odd
    let oddSeries = "Odd: ";
    for (let i = 1; i <= 19; i += 2) {
      oddSeries += i + ", ";
    }

    // e. Series
    let seriesSeries = "Series: ";
    for (let i = 2; i <= 20; i += 2) {
      seriesSeries += i + "k, ";
    }

    // Displaying the series in the browser
    document.write(countingSeries + "<br>");
    document.write(reverseCountingSeries + "<br>");
    document.write(evenSeries + "<br>");
    document.write(oddSeries + "<br>");
    document.write(seriesSeries);
  }

  // Call the function to generate and display the series
  generateSeries();




//   You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]


// Define the array
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
const userInput = prompt("Enter an item to search:");

// Find the index of the entered item in the array
const index = A.indexOf(userInput);

// Display the result
if (index !== -1) {
  console.log(`Yes, '${userInput}' is found at index ${index} in our Bakery.`);
} else {
  console.log(`We are Sorry, '${userInput}' is not Available in our Bakery.`);
}




// Write a program to identify the largest number in the given array.

// Define the array
const B = [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number, assuming the first element is the largest initially
let largestNumber = B[0];

// Iterate through the array to find the largest number
for (let i = 1; i < B.length; i++) {
  if (B[i] > largestNumber) {
    largestNumber = B[i];
  }
}

// Display the result
console.log(`Array items: ${B}`);

console.log(`The largest number in the array is: ${largestNumber}`);





// Write a program to identify the largest number in the given array.

// Define the array
const C = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number, assuming the first element is the smallest initially
let smallestNumber = C[0];

// Iterate through the array to find the smallest number
for (let i = 1; i < C.length; i++) {
  if (C[i] < smallestNumber) {
    smallestNumber = C[i];
  }
}

// Display the result
console.log(`Array items: ${C}`);
console.log(`The smallest number in the array is: ${smallestNumber}`);




// Write a program to print multiples of 5 ranging 1 to 100

// Print multiples of 5 ranging from 1 to 100
for (let i = 1; i <= 20; i++) {
    let multipleOf5 = i * 5;
    console.log(multipleOf5);
  }

  


//   Write a program that prints number from start of the array to desired stop value. Given array


  // Given array
var scores = [12, 45, 3, 22, 34, 50];

// Prompt user for the stop value
var stopValue = parseInt(prompt("Enter the stop value:"));

// Check if the input is a valid number
if (!isNaN(stopValue)) {
  // Print numbers from the start of the array to the stop value
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] <= stopValue) {
      console.log(scores[i]);
    } else {
      break; // Stop the loop if the current value exceeds the stop value
    }
  }
} else {
  console.log("Please enter a valid number for the stop value.");
}


// Odd And Even 

for (let num = 0; num <= 20; num++) {
  if (num % 2 === 0) {
      console.log(`${num} is even`);
  } else {
      console.log(`${num} is odd`);
  }
}


// Product of the odd integer from 0 to 7

let product = 1;

for (let num = 1; num <= 7; num += 2) {
    product *= num;
}

console.log("The product of the odd integers from 1 to 7 is:", product);



// Write a program that will write out a wedge of stars

const initialStars = 7;

for (let i = initialStars; i > 0; i--) {
    console.log('*'.repeat(i));
}




// Write a program to create the following patterns in your browser. Take number of lines as an input

const linesA = prompt("Enter the number of lines for Pattern a:");
for (let i = 0; i < linesA; i++) {
    console.log("*****");
}


const linesB = prompt("Enter the number of lines for Pattern b:");
for (let i = 1; i <= linesB; i++) {
    console.log('*'.repeat(i));
}



const linesC = prompt("Enter the number of lines for Pattern c:");
for (let i = linesC; i > 0; i--) {
    console.log('*'.repeat(i));
}


const linesD = prompt("Enter the number of lines for Pattern d:");

for (let i = 1; i <= linesD; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
}

for (let i = linesD - 1; i > 0; i--) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
}


