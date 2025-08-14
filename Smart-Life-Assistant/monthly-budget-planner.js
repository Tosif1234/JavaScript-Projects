let income = parseInt(prompt("Enter your Monthly Income : "));

console.log(`Your Income Is ${income}`);

if (income <= 0 || isNaN(income)) {
  console.log("Invalid Input! Please Enter The Valid income...");
} 
else {
  if (income < 10000) {
    console.log("Spend cautiously and save more!");
  } 
  else if (income >= 10000 && income < 30000) {
    console.log("Balanced Budget");
  } 
  else if (income >= 30000) {
    console.log("Your Income is Great! Consider investing in SIPs.");
  }
}
