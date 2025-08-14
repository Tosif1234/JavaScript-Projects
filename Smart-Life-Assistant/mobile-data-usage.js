let gb = parseInt(prompt("Enter total data used in a month (in GB)"));

console.log(`Your Total data used ${gb} GB`);

if (gb < 0 || isNaN(gb)) {
  console.log("Invalid Input! Please Enter The Valid GB...");
} 
else {

  if (gb <= 5) {
    console.log("Low Usage");
  } 
  else if (gb > 5 && gb <= 15) {
    console.log("Normal Usage");
  } 
  else if (gb > 15) {
    console.log("Heavy Usage, consider a bigger plan");
  }

}
