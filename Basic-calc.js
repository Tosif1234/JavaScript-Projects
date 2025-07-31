let A = 70, B = 30;

console.log("\n==== Arithmetic Calculator ====");
console.log(`Value of A: ${A}`);
console.log(`Value of B: ${B}`);
console.log("-----------------------------");

console.log(`1. Addition       (A + B) :  ${A} + ${B} = ${A+B}`);
console.log(`2. Substration    (A - B) :  ${A} - ${B} = ${A-B}`);
console.log(`3. Multiplication (A * B) :  ${A} * ${B} = ${A*B}`);
console.log(`4. division       (A / B) :  ${(B != 0) ? `${A} / ${B} = ${A/B}` : "Cannot divide by zero"}`);
console.log(`5. Modules        (A % B) :  ${(B != 0) ? `${A} % ${B} = ${A%B}` : "Cannot divide by zero"}`);

console.log("-----------------------------");




