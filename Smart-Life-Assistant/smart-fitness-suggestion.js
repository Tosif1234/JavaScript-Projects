let age = parseInt(prompt("Enter Your Age : "));
let weight = parseInt(prompt("Enter Your Weight : "));

console.log(`Your Age Is : ${age}`);
console.log(`Your Weight Is : ${weight} kg`);

if (age < 5 || age > 40) {
  console.log("Sorry..Data not available for this age group");
} 
else if (
  (age >= 5 && age <= 10) ||
  (age >= 11 && age <= 20) ||
  (age >= 21 && age <= 30) ||
  (age >= 31 && age <= 40)
) {
  if (
    (weight >= 15 && weight <= 25) ||
    (weight >= 26 && weight <= 45) ||
    (weight >= 46 && weight <= 65) ||
    (weight >= 66 && weight <= 80)
  ) {
    console.log("You are fit Keep maintaining your healthy lifestyle.");
  } else if (weight < 15) {
    console.log("Your underweight Consider a balanced diet and regular meals");
  } else {
    console.log("Your overweight Try regular exercise and a healthy diet plan.");
  }
}
