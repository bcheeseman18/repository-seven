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

function greaterThan(numbers) {
    let difference = numbers[0]; //the difference of the numbers in the array should start with the first number

    for (count = 0; count<numbers.length; count++) {
    if (numbers[count] > difference) { //if the second number in the array is greater than the first number
        difference = numbers[count];
        }
    }
return difference ;

}

greaterThan(5, 6); // returns true
greaterThan(4, 1); // returns false
