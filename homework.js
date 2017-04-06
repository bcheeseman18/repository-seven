//PROBLEM ONE
// Write a function called sum that takes two parameters and returns the sum of those 2 numbers.

// i want to add the each set of numbers together and get the total

function sum(numbers) {
   let total = 0;

for (count = 0; count< numbers.length; count++) {
    total = total + numbers[count];{ // i want the total to equal 0 + whatever numbers are in the array of numbers --- total = 0 + 5 and 9(however many numbers are in the array) = 14
    }
}

return total;
}

let number1 = sum([5, 9]); // return 14
let number2 = sum([1, 10]);// return 11


console.log(number1);
console.log(number2);

//PROBLEM TWO
//Write a function named avg that takes 3 parameters and returns the average of those 3 numbers.

// i want to add each number in each list of numbers then divide each list total by 3 to get the avarage of each list

function avg(numbers) {
    let total = 0;

    for (count = 0; count< numbers.length; count++) {
        total = total + (numbers[count] / 3); { // i want the total to equal total (0) plus the numbers in the array and divided by 3 to find the average
        }
    }

return total;

}

let list1 = avg([1, 5, 9]); // returns 5
let list2 = avg([4, 4, 4]); // returns 4
let list3 = avg([10, 4, 1]); // returns 5

console.log(list1);
console.log(list2);
console.log(list3);

//PROBLEM THREE
//Write a function called greaterThan that takes two parameters and returns true if the second parameter is greater than the first. 
//Otherwise the function should return false.

// i want to take each number in the array, compare them, and figure out if the second number is greather than the first

function greaterThan(numbers) { // looking at the numbers and determine which number in the array is greater
    let compare = numbers[0]; //the comparison of the numbers in the array starts with the first number
    let boolean = false; // the first number is assumed to be the biggest, which means that it is false that the second number is greater than
    

    for (count = 0; count<numbers.length; count++) {
    if (numbers[count] > compare) { //if the second number in the array is greater than the first number in comparison then...
        boolean = true; // it is true that the second number is greather than the first
        }
    }
return boolean;

}

let Array1 = greaterThan([5, 6]); // returns true 
let Array2 = greaterThan([4, 1]); // returns false

console.log(Array1); // this will call for the comparison of the array of numbers and it should be true that 6 is greater than 5
console.log(Array2); // this will call for the comparison of the array of numbers and it should be false that 1 is greater than 4

//PROBLEM FOUR
//Write a function called secondLargest that takes an array and returns the second largest number. 
//Hint: this is similar to one of the problems you did yesterday.

// i want to look at the array of four numbers, compare all of them (starting with the first and going to the last), and then figure out which number is the second biggest number


function secondLargest(numbers) { //looking at the numbers of each array and determine which number is second biggest number
    let biggest = 0;
    let otherBiggest = 0;

    for (count = 0; count < numbers.length; count++) {
       if (numbers[count] > biggest); {
            otherBiggest = biggest; 
            biggest = numbers[count];

        }

       if (numbers[count] > otherBiggest && biggest > numbers[count]) {//if the current number is bigger than the second biggest and the biggest number is smaller than the current number then...
            otherBiggest = numbers[count]; //the new second biggest is the current number
        }
        
    }
    return otherBiggest;

}

let num1 = secondLargest([1, 4, 5, 8]); // returns 5 because it is bigger than 4 and 1 but smaller than 8
let num2 = secondLargest([8, 3, 5, 1, 9, 10]); // returns 9

console.log(num1);
console.log(num2);