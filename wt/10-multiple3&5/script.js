// Variable to store the sum of numbers divisible by 3 or 5
var sum = 0;

// Loop through numbers from 0 to 999
for (var x = 0; x < 1000; x++) {
// Check if the current number is divisible by 3 or 5
if (x % 3 === 0 || x % 5 === 0) {
// Add the current number to the sum
sum += x;
}
}
// Output the final sum
console.log(sum);