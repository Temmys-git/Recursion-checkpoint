// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20


    
// Solution


function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

function main() {
    let age = prompt("Please enter your age:");
    age = parseInt(age);

    if (isNaN(age) || age < 0) {
        console.log("Please enter a valid age.");
    } else {
        let ticketPrice = calculateTicketPrice(age);
        console.log(`The price of the movie ticket for a ${age}-year-old is $${ticketPrice}.`);
    }
}

main();

// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let year = parseInt(prompt("Enter a year:"));

if (!isNaN(year)) {
    if (isLeapYear(year)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
} else {
    console.log("Please enter a valid year.");
}

// Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
let year = parseInt(prompt("Enter a year:"));

if (!isNaN(year)) {
    if (isLeapYear(year)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
} else {
    console.log("Please enter a valid year.");
}

// Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / power(base, -exponent);
    } else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
let base = parseFloat(prompt("Enter the base number: "));
let exponent = parseInt(prompt("Enter the exponent: "));
let result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is ${result}`);


