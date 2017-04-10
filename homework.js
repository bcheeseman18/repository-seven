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

//PROBLEM FIVE

//Write a function called containsVowel that takes a single string and returns true if there is at least one value or false otherwise.

//i want to look at each word and determine if the word contains a vowel, if it does then it returns true, if it doesnt have a vowel it returns false

function containsVowel(words) { // looking through each word and determining if there are vowels in it
    let vowel_list = 'aeiouAEIOU';  //list of values, bother upper and lower case, that we would like our test to be compared to
    let vowel = false; // it is false that the word  to contain a vowel

for (let count = 0; count < words.length; count++) { //look through each word in its entirety, going up one letter at a time, starting at first letter
    if (vowel_list.indexOf(words[count]) !== -1) {  //let me know the first sign of each vowel in each word, and if it doesnt equal -1(no vowels) then...
      vowel = true; // its true that there are vowels
    }
}

return vowel;

}


let value1 = containsVowel('alpha'); // returns true
let value2 = containsVowel('hmph'); // returns false

console.log(value1);
console.log(value2);


// PROBLEM SIX------------------------

//Write a function called piglatin that takes a single string and returns the piglatin version of that string.

//Hint: look into the split() function that you can call on strings.

//i want to look at each word in each phrase individually, split the first letter from the word and move it to the end of that word
// i want to do this for both words in the phrase

function piglatin(phrase) { // look at each phrase and make them into big latin, 
   let array = phrase.split(" "); // here, i want to make the phrase split into two seperate words
   //let arrayTwo = phrase.split(""); //i also want take the letters of each word and split them up to be able to move an individual letter


   for (let count = 0; count < array.length; count++) { //go through the word in entirety
        let pig = array[count].split("");
        let one = pig.shift(); 
        pig.push(one);
        pig.push('ay');
        let two = pig.join(""); 

        // if we dont change array its not going to be different
        array[count] = two;
        
        
        //take first letter off the first word

   /* (array(phrase[count])) { // array = the split phrase
        arrayTwo.shift = pig; //i want to remove the first item of the array --use shift()
        let pig = phrase.push(); // i want to add the first item to the end of the word -- use push()
    
        } */
    }
        return array.join(" "); 

}

let theWord1 = piglatin('good day'); // returns 'oodgay ayday'
let theWord2 = piglatin('come now'); // returns 'omecay ownay'

console.log(theWord1);
console.log(theWord2);