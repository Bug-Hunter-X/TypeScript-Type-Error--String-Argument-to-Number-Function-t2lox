function add(a: number, b: number): number {
  return a + b;
}

let num1 = parseInt("1", 10); // Convert string to number using parseInt()
let num2 = 2;

let result = add(num1, num2); // Correct type
console.log(result); // Output: 3